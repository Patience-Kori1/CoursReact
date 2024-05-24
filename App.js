import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style = {styles.container}>
      <Text> App Kori </Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container : {
    backgroundColor: "red",
    height: "80%",
    width: "80%"
  }
})