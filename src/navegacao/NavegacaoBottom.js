import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaCategorias from '../telas/TelaCategorias';
import TelaEducacao from '../telas/TelaEducacao';
import TelaTransacoes from '../telas/TelaTransacoes';
import TelaContas from '../telas/TelaContas';

const Tab = createBottomTabNavigator();

export default function NavegacaoBottom() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                borderRadius: 20,
                backgroundColor: "black",
                borderTopWidth: 0,
                height: 85,
            },
        }}>
            <Tab.Screen
                name="Categorias"
                component={TelaCategorias}
            />
            <Tab.Screen
                name="Transações"
                component={TelaTransacoes}
            />
            <Tab.Screen
                name="Contas"
                component={TelaContas}
            />
            <Tab.Screen
                name="Educacao"
                component={TelaEducacao}
            />
        </Tab.Navigator>
    )
}