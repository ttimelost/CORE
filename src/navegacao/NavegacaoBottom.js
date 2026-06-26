import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from '../telas/TelaInicial';

const Tab = createBottomTabNavigator();

export default function NavegacaoBottom() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
            name="Inicial"
            component={TelaInicial}
            />
        </Tab.Navigator>
    )
}