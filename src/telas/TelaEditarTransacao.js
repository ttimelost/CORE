import { React, useState } from 'react'
import {
  TouchableOpacity,
  View,
} from "react-native";

import { useTransacoes } from '../contexts/TransacoesContext';
import { TextInput } from 'react-native';

export default function TelaEditarTransacao({ navigation, route }) {
  const { adicionarTransacao, editarTransacao, removerTransacao } = useTransacoes(); // depois bora condensar isso tudo pra editar categoria, né?

  const transacao = route.params?.transacao;

  const editando = !!transacao; // se não tiver vazio

  const [valor, setValor] = useState(transacao.valor ?? "");
  const [beneficiario, setBeneficiario] = useState(transacao.beneficiario ?? "");
  const [id_categoria, setId_categoria] = useState(transacao.id_categoria ?? "");
  const [data, setData] = useState(transacao.data ?? "");

  const handleSalvar = () => {
    const transacaoFormulario = {
      id: transacao.id ?? String(Date.now()),
      valor,
      beneficiario,
      id_categoria,
      data
    };

    if (editando) {
      editarTransacao(transacaoFormulario);
    } else {
      adicionarTransacao(transacaoFormulario);
    }
    navigation.goBack();
  };

  function handleRemover() {
    if (!transacao) return;

    removerTransacao(transacao.id);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={styles.titulo}>
          {editando ? "Editar Transação" : "Nova transação"}
        </Text>
          <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
            <Text style={{ color: '#fff', fontSize: 16}}>Voltar</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.label}>Categoria</Text>
      <TextInput></TextInput>
    </View>
  )

} 