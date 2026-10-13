import { abrirBanco } from "./sqliteConnection";

export async function iniciarTabela() {
  try {
    await abrirBanco();
  } catch (error) {
    console.error("Erro DLL: ", error);
    throw error;
  }
}

export async function inserir(conta) {
  try {
    const db = await abrirBanco();

    return await db.runAsync(
      `INSERT INTO contas (
      nome,
      tipo
      ) VALUES (?, ?)`,
      [conta.nome, conta.tipo]
    );
  } catch (error) {
    console.error('Erro Insert:', error);
    throw error;
  }
}

export async function listarTodos() {
  try {
    const db = await abrirBanco();

    return await db.getAllAsync(
      'SELECT * FROM contas;'
    );
  } catch (error) {
    console.error('Erro ao listar categorias:', error);
    throw error;
  }
}

export async function apagar(id) {
  try {
    const db = await abrirBanco();

    return await db.runAsync(
      'DELETE FROM contas WHERE id = ?;',
      [id]
    );
  } catch (error) {
    console.error('Erro ao apagar conta: ', error);
    throw error;
  }
}

export async function atualizar(conta) {
  try {
    const db = await abrirBanco();

    return await db.runAsync(
      `
        UPDATE contas
        SET
          nome = ?,
          tipo = ?
        WHERE id = ?
      `,
      [conta.nome,
      conta.tipo,
      conta.id
      ]
    );
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    throw error;
  }
}
