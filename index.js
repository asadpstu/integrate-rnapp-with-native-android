import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello Android!</Text>
      <Text style={styles.normaltext}>React-native application opened successfully</Text>
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  normaltext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 50,
    width:'90%',
    borderColor:"#FFFF00",
    borderRadius: 10,
    borderWidth: 2,
    display: 'flex',
    alignContent: 'center',
    alignItems:'center',
    paddingTop: 10
  }
});

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld
);