import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screen/home/Home";
import Detail from "../screen/home/Detail";
import React from "react";
const Stack = createStackNavigator();

export function MyStack() {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />

        </Stack.Navigator>
    );
}
