import { abrirBanco } from "./sqliteConnection"

export function creationDAO(tabela, campos) {
  return {
    async iniciarTabela() {
      await abrirBanco();
    },

    async inserir(registro) {
      const db = await abrirBanco();
      const colunas = campos.join(", "); // separa todos por virgula
      const valores = campos.map(() => "?").join(", "); // cada campo vira "?"

      return db.runAsync(
        `INSERT INTO ${tabela} (${colunas}) VALUES (${valores});`,
        campos.map((campo) => registro[campo])
      );
      // ficaria tipo id, nome VALUES (?, ?)
    },

    async listarTodos() {
      const db = await abrirBanco();

      return db.getAllAsync(`SELECT * FROM ${tabela};`);
    },

    async apagar(id) {
      const db = await abrirBanco();

      return db.runAsync(`DELETE FROM ${tabela} WHERE id = ?;`, [id]); //aqui não precisa porque a gente sempre apaga mpor id
    },



    async atualizar(registro) {
      const db = await abrirBanco();
      // para cada campo, tempos campo = ?,
      const atualizacoes = campos.map((campo) => `${campo} = ?`).join(", ");

      return db.runAsync(
        `UPDATE ${tabela} SET ${atualizacoes} WHERE id = ?;`,
        // transformar campo em tabela.campo
        [...campos.map((campo) => registro[campo]), registro.id]
      );
    },
  };
}
