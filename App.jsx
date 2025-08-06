import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import CustomComponent from './rn_practice/rn_customComponent/CustomComponent';
// import FlatMapComp from "./Components/FlatMap";

export default function App() {

  const ClickMe = (val) => {
    console.log(val)
  }
  const ClickMe2 = () => {
    console.log("clicked two")
  }
  function ClickMe3() {
    console.log("clicked three")
  }

  return (
    <View
      style={styles.container}>
      <Text>
        Open up App.jsx to start working on your app!
      </Text>
      <CustomComponent />
      <Button
        style={styles.button}
        title='Click Me One'
        onPress={() => ClickMe("clicked one")}>
      </Button>
      <Button
        style={styles.button}
        title='Click Me Two'
        onPress={() => ClickMe2()}
        color={'green'}>
      </Button>
      <Button
        style={styles.button}
        title='Click Me Three'
        onPress={() => ClickMe3()}>
      </Button>
      {/* <FlatMapComp></FlatMapComp> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    title: "Click Me",
    backgroundColor: 'blue',
    color: 'red',
    margin: 10
  }
});
