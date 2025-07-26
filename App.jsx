import { View, StyleSheet, Text, Button } from 'react-native';
import CustomComponent from './Components/CustomComponent';

export default function App() {

  const ClickMe = () => {
    console.warn("Button Clicked one")
  }
  function ClickMe2() {
    console.warn("Button Clicked two")
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.jsx to start working on your app!</Text>
      <CustomComponent></CustomComponent>
      <Button style={styles.button} title='Click Me' onPress={() => ClickMe}></Button>
      <Button style={styles.button} title='Click Me' onPress={() => ClickMe} 
      color={'green'}></Button>
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
