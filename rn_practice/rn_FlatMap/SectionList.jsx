import React from 'react';
import { SectionList, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { list } from './ViewModels';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>This is a Section List Component</Text>
    <SectionList
      // scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      sections={list}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
      )}
      renderSectionHeader={({ section: { name } }) => (
        <Text style={styles.header}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
      )}
    // renderSectionFooter={({ section: { name } }) => (
    //   <Text style={styles.header}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
    // )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, paddingHorizontal: 20 },
  title: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 700
  },
  header: {
    fontSize: 20,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8
  },
  item: {
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
});

export default App;