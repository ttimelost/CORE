export function mesmoMes(data, referencia = new Date()) {
  let dataComparada;

  if (typeof data === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data)) {
    const [ano, mes, dia] = data.split("-").map(Number);
    dataComparada = new Date(ano, mes - 1, dia);

    if (
      dataComparada.getFullYear() !== ano ||
      dataComparada.getMonth() !== mes - 1 ||
      dataComparada.getDate() !== dia
    ) {
      return false;
    }
  } else {
    dataComparada = data instanceof Date ? data : new Date(data);
  }

  return (
    !Number.isNaN(dataComparada.getTime()) &&
    dataComparada.getMonth() === referencia.getMonth() &&
    dataComparada.getFullYear() === referencia.getFullYear()
  );
}

export function somarTransacoesDoMes(transacoes, campoId, id, referencia) {
  return transacoes
    .filter(
      (transacao) =>
        String(transacao[campoId]) === String(id) &&
        mesmoMes(transacao.data, referencia)
    )
    .reduce((total, transacao) => total + Number(transacao.valor || 0), 0);
}