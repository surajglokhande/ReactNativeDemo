import { StyleSheet, Text, View } from "react-native";

const CSSDemo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                This is the CSS demo
            </Text>
        </View>
    )
}

export default CSSDemo

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        marginTop: 50
    },
    title: {
        textAlign: 'center'
    }
})