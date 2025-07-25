import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import useStateExample from './UseState.jsx';

export default function App() {
  const { count, increment, decrement } = useStateExample();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.button}>
        <Button title="+" onPress={increment}/>
        <View style={{ height: 10 }}/>
        <Button title="-" onPress={decrement} />
      </View>
      <ChildView countValue={count}/>
    </View>
  );
}

const ChildView = (props) => {
  return(
    <View style={{alignItems: 'center' }}>
      <Text style={{margin:20, fontSize: 30}}>Child View Counter</Text>
      <Text style={{fontSize: 30}}>{props.countValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 50,
    width: 100,
    marginTop: 10,
  },
  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
