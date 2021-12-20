//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "screens/Home";
import Detail from "screens/Detail";

const stack = createNativeStackNavigator();

// create a component
const MainStack = () => {
    return (
        <stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                title: "Our App",
                // headerShown: false,
            }}
        >
            <stack.Screen name="Detail" component={Detail} />
            <stack.Screen name="Home" component={Home} />
        </stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
    },
});

//make this component available to the app
export default MainStack;
