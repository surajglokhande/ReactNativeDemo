import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

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

const CustomComponent = () => (
    <SafeAreaView style={styles.Component}>
        <Text
            style={styles.Text}>
            This is Custom Component
        </Text>
    </SafeAreaView>
)

// const CustomComponent = () => {
//     return (
//         <SafeAreaView style={styles.Component}>
//             <Text
//                 style={styles.Text}>
//                 This is Custom Component
//             </Text>
//         </SafeAreaView>
//     )
// };

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