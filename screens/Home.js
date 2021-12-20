//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { DETAIL } from "contants/NavigationString";

// create a component
const Home = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                onPress={() => navigation.navigate(DETAIL)}
                title="Go to Detail"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#2c3e50",
    },
});

//make this component available to the app
export default Home;
