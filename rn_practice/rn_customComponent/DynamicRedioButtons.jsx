import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const DynamicRedioButtons = ({ redioItems }) => {

    const [selected, setSelected] = useState(1)

    return (
        <View>
            {
                redioItems && redioItems.map((items, index) => (
                    <TouchableOpacity key={items.id} onPress={() => setSelected(items.id)}>
                        <View style={styles.redioConstainer}>
                            <View style={styles.redio}>
                                {selected == items.id ? <View style={styles.redioBg} /> : null}
                            </View>
                            <Text style={styles.redioText}>Redio {items.id}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
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

export default DynamicRedioButtons;