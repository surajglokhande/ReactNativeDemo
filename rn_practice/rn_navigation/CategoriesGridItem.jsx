import { Dimensions, StyleSheet, Text, View } from "react-native";

function CategoriesGridItem({ title, color }) {
    return (
        <View style={styles.superContainer}>
            <Text style={styles.gridText}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,
        height: 100,
        margin: 10,
        borderRadius: 3,
        shadowRadius: 1,
        elevation: 2,
        shadowOpacity: 0.3,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'

        // backgroundColor: 'gray'
    },
    gridText: {
        // backgroundColor: 'yellow',
        // backfaceVisibility: 'hidden'
    }
});

export default CategoriesGridItem;