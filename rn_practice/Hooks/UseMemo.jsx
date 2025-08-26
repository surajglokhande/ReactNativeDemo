import { useMemo, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function UseMemoComponent() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const INCREMENT = () => {
        setCountOne(countOne => countOne + 1)
    }

    const DECREMENT = () => {
        setCountTwo(countTwo => countTwo - 1)
    }

    const isEven = useMemo(() => {
        for (let i = 0; i < 100000000; i++) { }
        return countOne % 2 === 0
    }, [countOne])

    return (
        <View style={styles.superConstainer}>
            <Text style={styles.textContainer}>
                {countOne}
            </Text>
            <Text style={styles.textContainer}>
                {isEven ? 'even' : 'odd'}
            </Text>
            <Text style={styles.textContainer}>
                {countTwo}
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="+"
                    onPress={() => INCREMENT()}>
                </Button>
                <Button
                    title="-"
                    onPress={() => DECREMENT()}>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        fontSize: 20
    },
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

export default UseMemoComponent;