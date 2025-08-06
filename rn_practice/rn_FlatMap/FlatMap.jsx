import { FlatList, Text, View } from "react-native";

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
        <View>
            <Text>This is a Flatmap Component</Text>
            <FlatList
                style={{ maxHeight: '50%', backgroundColor: 'gray' }}
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    <View style={{ margin: 10 }}>
                        <Text style={{ backgroundColor: 'red' }}>
                            {item.name}
                        </Text>
                    </View>
                }}
            >
            </FlatList >
        </View >
    )
}