import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaCategorias from '../telas/TelaCategorias';
import TelaEducacao from '../telas/TelaEducacao';

const Tab = createBottomTabNavigator();

export default function NavegacaoBottom() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
            name="Categorias"
            component={TelaCategorias}
            />
            <Tab.Screen 
            name="Educacao"
            component={TelaEducacao}
            />
        </Tab.Navigator>
    )
}