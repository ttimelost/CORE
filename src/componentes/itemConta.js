import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function ItemConta({ conta }) {
  return (
    <View>
      <TouchableOpacity>
        <Text>{conta.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}
