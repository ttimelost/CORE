export async function iniciarTabela() {
  try {
    await abrirBanco();
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
    throw error;
  }
}