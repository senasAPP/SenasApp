import { StyleSheet,TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View , } from '../components/Themed';
import { Button,  SafeAreaView, Alert } from 'react-native';


import React, { Component } from 'react'

export default function TabHablalo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hablalo</Text>
      <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
