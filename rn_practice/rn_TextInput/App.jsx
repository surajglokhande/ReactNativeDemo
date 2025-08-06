import { useState, React } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import CustomInput from "./TextInput";


const InputComponent = () => {

    const [value, setValue] = useState('')
    const [actual, setActual] = useState('')
    let actualPrint = ''
    const PrintData = (data) => {
        setActual(data)
        setValue('')
    }

    const reveivedData = (data) => {
        PrintData(data)
    }

    return (
        <SafeAreaView style={styles.superContainer}>
            <View>
                <CustomInput
                    style={styles.inputContainer}
                    placeholder="Enter name!"
                    value={value}
                    onChangeText={(value) => setValue(value)}
                    setDataBack={() => reveivedData()}
                />
                <View style={{ margin: 10 }}>
                    <Button
                        title="Add name"
                        onPress={() => reveivedData()}>
                    </Button>
                </View>
                <Text>
                    {actual}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: "center"
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        height: 40
    },
    TextStyle: {
        backgroundColor: 'yellow'
    }
})


export default InputComponent;
