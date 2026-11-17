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
      id_categoria INTEGER NOT NULL REFERENCES categorias(id),
      id_conta INTEGER NOT NULL REFERENCES contas(id),
      data TEXT NOT NULL,
      memo TEXT
    );
  `);

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
