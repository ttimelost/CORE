import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaRegistro from '../telas/TelaRegistro';
import NavegacaoBottom from './NavegacaoBottom';

const Stack = createNativeStackNavigator();

export default function NavegacaoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="RegistrSo"
        component={TelaRegistro}
      />
      <Stack.Screen
        name="Principal"
        component={NavegacaoBottom}
      />
    </Stack.Navigator>
  );
}