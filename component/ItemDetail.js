//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// create a component
const ItemDetail = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.viewRow}
            // onPress={()=>}
        >
            <Image style={styles.imageView} source={item.image} />
            <View style={[styles.textView]}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
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
    viewRow: {
        flex: 1,
        flexDirection: "row",
    },
    imageView: {
        flex: 2,
        height: 70,
        width: 80,
    },
    textView: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
});

//make this component available to the app
export default ItemDetail;
