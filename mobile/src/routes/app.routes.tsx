import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export type AppRoutesList = {
    Home: undefined;
    Dashboard: undefined;
};

const AppStack = createNativeStackNavigator<AppRoutesList>();

export default function AppRoutes() {
    return (
        <AppStack.Navigator 
            screenOptions={{
                
            }}
        >
            <AppStack.Screen 
                name="Home"
                component={Home}
            />

            <AppStack.Screen 
                name="Dashboard"
                component={Dashboard}
            />
        </AppStack.Navigator>
    )
}