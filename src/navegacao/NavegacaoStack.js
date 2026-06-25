import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaRegistro from '../telas/TelaRegistro';
import TelaInicial from '../telas/TelaInicial';

const Stack = createNativeStackNavigator();

export default function NavegacaoStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Registro"
        component={TelaRegistro}
      />
      <Stack.Screen
        name="Inicial"
        component={TelaInicial}
      />
    </Stack.Navigator>
  );
}