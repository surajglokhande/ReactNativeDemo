import { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const initialState = {
    count: 0
}
const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

function UseReducerComponent() {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <View style={styles.superConstainer}>
            <View>
                <Text>
                    {state.count}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="+"
                    onPress={() => dispatch({ type: 'INCREMENT' })}>
                </Button>
                <Button
                    title="-"
                    onPress={() => dispatch({ type: 'DECREMENT' })}>
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

export default UseReducerComponent;