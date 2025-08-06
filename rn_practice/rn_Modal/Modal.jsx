import { Modal, View, Button, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useState, React } from 'react';


const ModalApp = () => {

    const [show, setShow] = useState(false);

    const onClosedRequest = () => {
        setShow(false)
    }
    const showModal = () => {
        setShow(true)
    }

    return (
        <SafeAreaView style={styles.superContainer}>
            <View >
                <Text>
                    This is Modal Demo
                </Text>
                <View>
                    <Button
                        color='blue'
                        title='Click Me!'
                        onPress={() => showModal()}>
                    </Button>
                </View>
                <ModalDemo visible={show} onClose={() => onClosedRequest()} />
            </View>
        </SafeAreaView >
    )
}

const ModalDemo = ({ visible, onClose }) => (
    < Modal visible={visible} onRequestClose={onClose} animationType='slide'>
        {console.log(visible)}
        <View style={styles.superContainer}>
            <Text >
                I'm Modal
            </Text>
            <Button
                title='close Me!'
                onPress={onClose}>
                {console.log(visible)}
            </Button>
        </View>
    </Modal >
)

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightblue'
    }
});

export default ModalApp;