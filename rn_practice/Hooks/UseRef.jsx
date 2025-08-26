import { useRef } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

function UseRefComponent() {

    const inputRef = useRef(null)

    function handleRef() {
        // inputRef.current.focus()r
        inputRef.current.value = "adcwcwvvqdwv"
        console.log(inputRef.current.value)
    }

    return (
        <View style={styles.superConstainer}>
            <Text>
                This is the Use ref component
            </Text>
            <TextInput
                ref={inputRef}>
            </TextInput>
            <View>
                <Button
                    title="Click Me!"
                    onPress={
                        () => handleRef()
                    }>
                </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    superConstainer: {
        flex: 1,
        // flexDirection: 'row'
        marginTop: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        minWidth: '60%',
    }
})

export default UseRefComponent;