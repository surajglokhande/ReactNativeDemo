import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import CustomComponent from './Components/CustomComponent';

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
    <View style={styles.container}>
      <Text>Open up App.jsx to start working on your app!</Text>
      <CustomComponent></CustomComponent>
      <Button style={styles.button} title='Click Me One' onPress={() => ClickMe("clicked one")}></Button>
      <Button style={styles.button} title='Click Me Two' onPress={() => ClickMe2()} color={'green'}></Button>
      <Button style={styles.button} title='Click Me Three' onPress={() => ClickMe3()} ></Button>
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
