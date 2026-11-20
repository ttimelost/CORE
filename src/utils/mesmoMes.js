export function mesmoMes(data, referencia = new Date()) {
  let dataComparada;

  if (typeof data === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data)) { //AAAA-MM-DD
    const [ano, mes, dia] = data.split("-").map(Number); // AAAA, MM, DD
    dataComparada = new Date(ano, mes - 1, dia); // data de verdade, janeiro seria mes 0

    if (
      dataComparada.getFullYear() !== ano ||
      dataComparada.getMonth() !== mes - 1 ||
      dataComparada.getDate() !== dia
    ) {
      return false;
    }
  } else {
    dataComparada = data instanceof Date ? data : new Date(data); //converta pra Date automaticamente porque é JS
  }

  return (
    !Number.isNaN(dataComparada.getTime()) && // a data precisa ser válida
    dataComparada.getMonth() === referencia.getMonth() &&
    dataComparada.getFullYear() === referencia.getFullYear()
  );
}

export function somarTransacoesDoMes(transacoes, idCampo, id, referencia) {
  return transacoes
    .filter(
      (transacao) =>
        String(transacao[idCampo]) === String(id) &&
        mesmoMes(transacao.data, referencia)
    )
    .reduce((total, transacao) => total + Number(transacao.valor || 0), 0);
}

export function somarGastosDoMes(transacoes, idCampo, id, referencia) {
  return transacoes
    .filter(
      (transacao) =>
        String(transacao[idCampo]) === String(id) &&
        mesmoMes(transacao.data, referencia)
    )
    .reduce(
      (total, transacao) =>
        total + (Number(transacao.valor) < 0
          ? Math.abs(Number(transacao.valor))
          : 0),
      0
    )
}

export function mesAtual(referencia = new Date()) {
  const ano = referencia.getFullYear();
  const mes = String(referencia.getMonth() + 1).padStart(2, "0");
  return `${ano}-${mes}`;
}

export function somarAtribuicoesAteMes(atribuicoes, idCategoria, limite) {
  return atribuicoes
    .filter(
      (atribuicao) =>
        String(atribuicao.id_categoria) == String(idCategoria) &&
        String(atribuicao.mes) <= String(limite)
    )
    .reduce((total, atribuicao) => total + Number(atribuicao.valor || 0), 0);
}

export function somarGastosAteMes(transacoes, idCategoria, limite) {
  return transacoes
    .filter((transacao) => {
      const data = String(transacao.data || "").slice(0, 7); // Extrai o ano e mês no formato "YYYY-MM"
      return (
        String(transacao.id_categoria) === String(idCategoria) && data <= String(limite)
      );
    })
    .reduce( //esse reduce é como um map mas que retorna um valor só
      (total, transacao) => total + Math.abs(Number(transacao.valor || 0)),
      0
    );
}

export function somarSaldoContas(transacoes) {
  return transacoes.reduce(
    (total, transacao) => total + Number(transacao.valor || 0),
    0
  );
}