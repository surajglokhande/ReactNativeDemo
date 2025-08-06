import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function FlatMapComp() {

    const list = [
        {
            id: 1,
            name: "suraj"
        },
        {
            id: 2,
            name: "dhiraj"
        },
        {
            id: 3,
            name: "shweta"
        },
        {
            id: 4,
            name: "ruchika"
        },
        {
            id: 5,
            name: "sumedh"
        }
    ]

    return (
        <SafeAreaView style={styles.superContainer}>
            <View>
                <Text style={styles.title}>This is a Flatmap Component</Text>
                <FlatList
                    style={{ maxHeight: '20%', backgroundColor: 'yellow' }}
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <Text>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    }}
                />
            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        margin: 20,
        backgroundColor: 'gray'
    },
    superContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})