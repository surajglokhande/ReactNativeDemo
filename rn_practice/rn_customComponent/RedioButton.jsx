import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const RedioButton = () => {

    const [flag, setflag] = useState(1)

    return (
        <View>
            <TouchableOpacity onPress={() => { setflag(1); console.log(`selected one`) }}>
                <View style={styles.redioConstainer}>
                    <View style={styles.redio}>
                        {flag == 1 ? <View style={styles.redioBg} /> : null}
                    </View>
                    <Text style={styles.redioText}>Redio One</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setflag(2); console.log(`selected two`) }}>
                <View style={styles.redioConstainer}>
                    <View style={styles.redio}>
                        {flag == 2 ? <View style={styles.redioBg} /> : null}
                    </View>
                    <Text style={styles.redioText}>Redio Two</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    redioConstainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    redio: {
        borderColor: 'black',
        borderWidth: 1,
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        margin: 5,
    },
    redioBg: {
        backgroundColor: 'black',
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        margin: 4,
    },
    redioText: {
        fontSize: 20
    }
})

export default RedioButton;