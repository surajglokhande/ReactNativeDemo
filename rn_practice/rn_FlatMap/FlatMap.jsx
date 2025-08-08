import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import { list } from "./ViewModels";

export default function FlatMapComp() {

    return (
        <View style={styles.superContainer}>
            <Text style={styles.title}>This is a Flatmap Component</Text>

            <FlatList
                style={{ maxHeight: '20%', backgroundColor: 'yellow' }}
                data={list}
                keyExtractor={item => item.sectionId}
                renderItem={({ item }) => <View style={{ alignItems: 'center' }}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                }
            />
        </View >
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 10,
        backgroundColor: 'gray'
    },
    list: {
        marginHorizontal: 10
    },
    header: {
        backgroundColor: 'gray',
        margin: 10
    },
    superContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})