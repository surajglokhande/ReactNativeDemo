import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ThemeContext } from "./App";

const UseContextComponent = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <View style={styles.useContextView}>
            <Text style={styles.useContextText}>
                This is from useContext:- {themeContext}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    useContextView: {
        borderTopWidth: 1,
        borderTopColor: 'black',
        margin: 10
    },
    useContextText: {
        fontSize: 20,
        fontWeight: 10
    }
})
export default UseContextComponent;