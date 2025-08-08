import React, { Component } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            str: ''
        }
    }

    increament = () => {
        this.setState({ count: this.state.count + 1 })
    }

    changedName = (name) => {
        this.setState({ str: name })
    }

    render() {
        return (
            <View style={styles.centerContainer}>
                <Text
                    style={styles.title}>
                    This is the class component
                </Text>
                <View>
                    <Text
                        style={styles.title}>
                        Counter is: {this.state.count}
                    </Text>
                    <View style={styles.button}>
                        <Button
                            title="+"
                            onPress={this.increament}>
                        </Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="ADD Name"
                            onPress={this.changedName('suraj')}>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default ClassComponent;

const styles = StyleSheet.create({
    centerContainer: {
        // alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: 20,
        fontWeight: 70,
        fontSize: 70,
        fontWeight: 500,
        width: 200,
        margin: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 70,
        marginTop: 55,
        // alignItems: 'center',
        alignSelf: 'center'
    }
})