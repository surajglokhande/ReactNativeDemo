import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import useStateExample from './UseState.jsx';
import UseEffectDemo from './UseEffect.jsx';

export default function App() {
  const { count, increment, decrement } = useStateExample();
  const [isHideChild, setHideChild] = useState(false);

  useEffect(() => {
    console.log(`when count value changed to: ${count}`);
  }, [count])

  useEffect(() => {
    console.log(`when only after component mount`);
  }, [])

  useEffect(() => {
    console.log(`when component mount`);
    console.log(`when state/props changed`);
  })

  return (
    <View style={styles.safeArea}>
      <View style={styles.firstContainer}>
        <Text style={styles.text}>Count: {count}</Text>
        <View style={styles.button}>
          <Button title="+" onPress={increment} />
          <View style={{ height: 10 }} />
          <Button title="-" onPress={decrement} />
        </View>
        <View>
          <ChildView countValue={count} />
        </View>
        <View style={styles.button}>
          <Button title="Hide & Show useEffect" onPress={() => setHideChild(!isHideChild)} />
        </View>
        <View>
          {isHideChild ? null : <UseEffectDemo />}
        </View>
      </View>
    </View>
  );
}

const ChildView = (props) => {

  useEffect(() => {
    console.log(`when props changed ${props.countValue}`)
  }, [props.countValue])

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ margin: 20, fontSize: 30 }}>Child View Counter</Text>
      <Text style={{ fontSize: 30 }}>{props.countValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 50,
    minWidth: 100,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 30,
  },
  firstContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // margin: 20
  },
  safeArea: {
    flex: 1,
    marginTop: 55
  }
});
