import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";


const UseEffectDemo = () => {

    let timer = setInterval(() => {
        console.log(`timer stated..., to stop timer used unmount useEffect`)
    }, 2000);

    useEffect(() => {
        return (() => clearInterval(timer))
    })

    return (
        <View style={styles.superView}>
            <Text style={styles.navigationTitle}>
                UseEffect demo
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navigationTitle: {
        fontSize: 20,
        // backgroundColor: 'gray',
        margin: 10
    },
    superView: {
        // flex: 1,
        // alignContent: 'stretch',
        // alignItems: 'stretch',
        borderTopColor: 'black',
        borderTopWidth: 1,
        // backgroundColor: 'yellow'
    }
})

export default UseEffectDemo;