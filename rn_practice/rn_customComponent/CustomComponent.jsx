import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RedioButton from "./RedioButton";
import DynamicRedioButtons from "./DynamicRedioButtons";

// function CustomComponent() {
//     return (
//         <SafeAreaView style={styles.Component}>
//             <Text
//                 style={styles.Text}>
//                 This is Custom Component
//             </Text>
//         </SafeAreaView>
//     )
// }

// const CustomComponent = () => (
//     <SafeAreaView style={styles.Component}>
//         <Text
//             style={styles.Text}>
//             This is Custom Component
//         </Text>
//     </SafeAreaView>
// )

const CustomComponent = () => {

    const redios = [
        {
            id: 1,
            item: "Suraj"
        },
        {
            id: 2,
            item: "Sumedh"
        },
        {
            id: 3,
            item: "Dhiraj"
        },
        {
            id: 4,
            item: "Shweta"
        },
    ]

    return (
        <SafeAreaView style={styles.Component}>
            <Text
                style={styles.Text}>
                This is Custom Static Redio Component
            </Text>
            <View>
                <RedioButton />
            </View>
            <Text
                style={styles.Text}>
                This is Custom  Dynamic Redio Component
            </Text>
            <View>
                <DynamicRedioButtons redioItems={redios} />
            </View>
        </SafeAreaView>
    )
};

// class CustomComponent extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     state = {
//         name: "Custom component",
//         description: "this is a custom component"
//     }

//     render() {
//         return (
//             <SafeAreaView style={styles.Component}>
//                 <Text
//                     style={styles.Text}>
//                     This is Custom Component
//                 </Text>
//             </SafeAreaView>
//         )
//     }
// }

const styles = StyleSheet.create({
    Component: {
        backgroundColor: 'gray',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Text: {
        margin: 10,
        fontSize: 20
    }
})

export default CustomComponent;