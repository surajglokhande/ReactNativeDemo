import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet, Text, Button } from 'react-native';
import store from './Store';
import { add, decrement, increment, subtract } from './Actions';


export default function App() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.reducer.count)

    const incrementCount = () => {
        dispatch(increment())
    }
    const decrementCount = () => {
        dispatch(decrement())
    }

    const addCount = () => {
        dispatch(add(5))
    }
    const subtractCount = () => {
        dispatch(subtract(2))
    }

    return (
        // <Provider store={store}>
        <View style={styles.safeArea}>
            <View style={styles.firstContainer}>
                <Text style={styles.text}>Count: {count}</Text>
                <View style={styles.button}>
                    <Button title="+" onPress={() => incrementCount()} />
                    <View style={{ height: 10 }} />
                    <Button title="-" onPress={() => decrementCount()} />
                    <View style={{ height: 10 }} />
                    <Button title="Add 5 more" onPress={() => addCount()} />
                    <View style={{ height: 10 }} />
                    <Button title="substract 2" onPress={() => subtractCount()} />
                </View>
            </View>
        </View>
        // </Provider>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 50,
        minWidth: 100,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 30,
    },
    firstContainer: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // margin: 20
    },
    safeArea: {
        flex: 1,
        marginTop: 55
    }
});
