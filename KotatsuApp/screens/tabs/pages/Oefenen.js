import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const GLOBAL = require('../../assets/Globals');



function OefenScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Lessen1')} Navigaten naar de quiz
      >
        <Text style={styles.text}>
          Lesson 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Lessen1', { screen: 'Lessen1'})}
      >
        <Text style={styles.text}>
          Lesson 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Lessen1', { screen: 'Lessen1'})}
      >
        <Text style={styles.text}>
          Lesson 3
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Lessen1', { screen: 'Lessen1'})}
      >
        <Text style={styles.text}>
          Lesson 4
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button} 
        // onPress={() => navigation.navigate('Lessen1', { screen: 'Lessen1'})}
      >
        <Text style={styles.text}>
          Lesson 5
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button} 
        // onPress={() => navigation.navigate('Lessen1', { screen: 'Lessen1'})}
      >
        <Text style={styles.text}>
          Lesson 5
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function Oefenen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="OefenScreen" 
          component={OefenScreen}
          options={{ 
            title: 'Kies je oefening!',
          }}
        />
      </Stack.Navigator> 
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#a3c2fa",
    width: '45%',
    height: 40,
    margin: 5
  },
  text: {
    padding: 12
  }
});

export default Oefenen;