//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTab from "./MainTab";
import Secret from "screens/Secret";

const drawer = createDrawerNavigator();

// create a component
const Route = () => {
    return (
        <NavigationContainer>
            <drawer.Navigator initialRouteName="Main Drawer">
                <drawer.Screen name="Main Drawer" component={MainTab} />
                <drawer.Screen name="Secret" component={Secret} />
            </drawer.Navigator>
        </NavigationContainer>
    );
};

//make this component available to the app
export default Route;
