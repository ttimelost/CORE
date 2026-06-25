import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaRegistro from '../screens/TelaInicial';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Registro"
        component={TelaRegistro}
      />
    </Stack.Navigator>
  );
}