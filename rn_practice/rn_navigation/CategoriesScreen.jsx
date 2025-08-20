import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "./dummy-data";
import CategoriesGridItem from "./CategoriesGridItem";

function CategoriesGridView(itemData) {
    return <CategoriesGridItem title={itemData.item.title} color={itemData.item.color} />
}

const CategoriesScreen = () => {
    return (
        <View style={styles.superConstainer}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={CategoriesGridView}
                numColumns={2}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    superConstainer: {
        marginTop: 55,
        // backgroundColor: 'yellow'
    }
})

export default CategoriesScreen;