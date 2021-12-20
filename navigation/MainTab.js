//import liraries
import React from "react";
import { StyleSheet } from "react-native";

import Home from "screens/Home";
import Detail from "screens/Detail";
import Search from "screens/Search";
import Setting from "screens/Setting";

import MainStack from "./MainStack";

import {
    HOME,
    DETAIL,
    SEARCH,
    SETTING,
    TABHOME,
} from "contants/NavigationString";
// import NavigationString from "../contants/NavigationString";
import Icon from "react-native-vector-icons/FontAwesome";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

// create a component
const MainTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={TABHOME}
            screenOptions={{
                title: "",
                tabBarActiveTintColor: "orange",
                tabBarIntactiveTintColor: "grey",
            }}
        >
            {/* Tab Home */}
            <Tab.Screen
                name={TABHOME}
                // component={Home}
                component={MainStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="home"
                            size={30}
                            color={focused ? "orange" : "grey"}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={SEARCH}
                component={Search}
                screenOptions={{
                    tabBarActiveTintColor: "orange",
                    tabBarIntactiveTintColor: "grey",
                }}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="search"
                            size={30}
                            color={focused ? "orange" : "grey"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={SETTING}
                component={Setting}
                screenOptions={{
                    tabBarActiveTintColor: "orange",
                    tabBarIntactiveTintColor: "grey",
                }}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="cog"
                            size={30}
                            color={focused ? "orange" : "grey"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

//make this component available to the app
export default MainTab;
