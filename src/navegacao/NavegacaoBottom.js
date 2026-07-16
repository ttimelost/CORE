import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from '../telas/TelaInicial';
import TelaEducacao from '../telas/TelaEducacao';
import TelaBemVindo1 from '../telas/TelaBemVindo1';

const Tab = createBottomTabNavigator();

export default function NavegacaoBottom() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
            name="Inicial"
            component={TelaInicial}
            />
            <Tab.Screen 
            name="Educacao"
            component={TelaEducacao}
            />
            <Tab.Screen
            name="temp"
            component={TelaBemVindo1}
            />
        </Tab.Navigator>
    )
}