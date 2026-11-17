import * as SQLite from "expo-sqlite";

const DATABASE_NAME = "core.db";

let databasePromise = null;
let databaseOpening = Promise.resolve();

export function abrirBanco() {
  if (!databasePromise) {
    const opening = databaseOpening.then(async () => {
      const database = await SQLite.openDatabaseAsync(DATABASE_NAME);

      try {
        await database.execAsync(`
          PRAGMA foreign_keys = ON;
        `); // pra references precisa disso
        await inicializarBanco(database);

        return database;
      } catch (error) {
        try {
          await database.closeAsync();
        } catch (closeError) {
          console.error(
            "Não foi possível fechar o SQLite após falha na inicialização.",
            closeError
          );
        }

        throw error;
      }
    });

    databasePromise = opening.catch((error) => {
      databasePromise = null;
      throw error;
    });

    databaseOpening = databasePromise.then(
      () => undefined,
      () => undefined
    );
  }

  return databasePromise;
}

async function inicializarBanco(database) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS contas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      tipo INTEGER
    );

    CREATE TABLE IF NOT EXISTS categorias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      icone TEXT NOT NULL,
      alvo INTEGER,
      tipoAlvo INTEGER,
      atribuido INTEGER NOT NULL,
      grupo TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS transacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      valor INTEGER NOT NULL,
      beneficiario TEXT NOT NULL,
      id_categoria INTEGER NOT NULL REFERENCES categorias(id) ON DELETE CASCADE,
      id_conta INTEGER NOT NULL REFERENCES contas(id) ON DELETE CASCADE,
      data TEXT NOT NULL,
      memo TEXT
    );

    CREATE TABLE atribuicoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_categoria INTEGER NOT NULL,
  mes TEXT NOT NOT NULL,
  valor INTEGER NOT NOT NULL,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id) ON DELETE CASCADE
);

  `);

  await migrarTransacoesComCascata(database);

  const colunasCategoria = await database.getAllAsync(`
    PRAGMA table_info(categorias);
  `);
  const nomesColunasCategoria = new Set(
    colunasCategoria.map((coluna) => coluna.name)
  );

  if (
    nomesColunasCategoria.has("rotulo") &&
    !nomesColunasCategoria.has("nome")
  ) {
    await database.execAsync(`
      ALTER TABLE categorias
      RENAME COLUMN rotulo TO nome;
    `);
  }

  if (
    nomesColunasCategoria.has("titulo") &&
    !nomesColunasCategoria.has("grupo")
  ) {
    await database.execAsync(`
      ALTER TABLE categorias
      RENAME COLUMN titulo TO grupo;
    `);
  }
}

async function migrarTransacoesComCascata(database) {
  const tabelaTransacoes = await database.getAllAsync(`
    SELECT sql
    FROM sqlite_master
    WHERE type = 'table' AND name = 'transacoes';
  `);

  const sqlTabela = tabelaTransacoes[0]?.sql ?? "";

  if (sqlTabela.includes("ON DELETE CASCADE")) {
    return;
  }

  await database.execAsync(`
    PRAGMA foreign_keys = OFF;
    ALTER TABLE transacoes RENAME TO transacoes_legacy;
    CREATE TABLE transacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      valor INTEGER NOT NULL,
      beneficiario TEXT NOT NULL,
      id_categoria INTEGER NOT NULL REFERENCES categorias(id) ON DELETE CASCADE,
      id_conta INTEGER NOT NULL REFERENCES contas(id) ON DELETE CASCADE,
      data TEXT NOT NULL,
      memo TEXT
    );
    INSERT INTO transacoes (id, valor, beneficiario, id_categoria, id_conta, data, memo)
    SELECT id, valor, beneficiario, id_categoria, id_conta, data, memo
    FROM transacoes_legacy;
    DROP TABLE transacoes_legacy;
    PRAGMA foreign_keys = ON;
  `);
}
