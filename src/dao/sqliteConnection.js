import * as SQLite from "expo-sqlite";

const DATABASE_NAME = "core.db";

let databasePromise = null;
let databaseOpening = Promise.resolve();

export function abrirBanco() {
  if (!databasePromise) {
    const opening = databaseOpening.then(async () => {
      const database = await SQLite.openDatabaseAsync(DATABASE_NAME);

      try {
        await inicializarBanco(database);
        return database;
      } catch (error) {
        try {
          await database.closeAsync();
        } catch (closeError) {
          console.error("Não foi possível fechar o SQLite após falha na inicialização.", closeError);
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
      () => undefined,
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
      rotulo TEXT NOT NULL,
      icone TEXT NOT NULL,
      alvo INTEGER,
      tipoAlvo INTEGER,
      atribuido INTEGER NOT NULL,
      titulo TEXT NOT NULL
    );

    
  `);
}
