
import * as SQLite from 'expo-sqlite';

let dbInstance = null;

// Abre a conexão com o banco de dados
async function abrirConexao() {
  if (!dbInstance) {
    dbInstance = await SQLite.openDatabaseAsync('categorias.db');
  }

  return dbInstance;
}

// Cria a tabela de categorias
export async function iniciarTabela() {
  try {
    const db = await abrirConexao();

    // Dinheiro é armazenado em centavos!
    return await db.runAsync(`
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
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
    throw error;
  }
}

// Insere uma nova categoria
export async function inserir(categoria) {
  try {
    const db = await abrirConexao();

    return await db.runAsync(
      `INSERT INTO categorias (
        rotulo,
        icone,
        alvo,
        tipoAlvo,
        atribuido,
        titulo
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        categoria.rotulo,
        categoria.icone,
        categoria.alvo,
        categoria.tipoAlvo,
        categoria.atribuido,
        categoria.titulo,
      ]
    );
  } catch (error) {
    console.error('Erro ao inserir categoria:', error);
    throw error;
  }
}

// Lista todas as categorias
export async function listarTodos() {
  try {
    const db = await abrirConexao();

    return await db.getAllAsync(
      'SELECT * FROM categorias;'
    );
  } catch (error) {
    console.error('Erro ao listar categorias:', error);
    throw error;
  }
}

// Apaga uma categoria pelo ID
export async function apagar(id) {
  try {
    const db = await abrirConexao();

    return await db.runAsync(
      'DELETE FROM categorias WHERE id = ?;',
      [id]
    );
  } catch (error) {
    console.error('Erro ao apagar categoria:', error);
    throw error;
  }
}

// Atualiza os dados de uma categoria
export async function atualizar(categoria) {
  try {
    const db = await abrirConexao();

    return await db.runAsync(
      `
        UPDATE categorias
        SET
          rotulo = ?,
          icone = ?,
          alvo = ?,
          tipoAlvo = ?,
          atribuido = ?,
          titulo = ?
        WHERE id = ?;
      `,
      [
        categoria.rotulo,
        categoria.icone,
        categoria.alvo,
        categoria.tipoAlvo,
        categoria.atribuido,
        categoria.titulo,
        categoria.id,
      ]
    );
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    throw error;
  }
}
