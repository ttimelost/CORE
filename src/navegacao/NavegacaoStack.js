import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaRegistro from '../telas/TelaRegistro';
import NavegacaoBottom from './NavegacaoBottom';
import TelaBemVindo1 from '../telas/TelaBemVindo1';

const Stack = createNativeStackNavigator();

export default function NavegacaoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="temp"
        component={TelaBemVindo1}
      />
      <Stack.Screen
        name="Registro"
        component={TelaRegistro}
      />
      <Stack.Screen
        name="Principal"
        component={NavegacaoBottom}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}