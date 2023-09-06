import { StyleSheet, View,Text, TextInput, Button} from 'react-native';
import React, { useState } from 'react';
import CustomHook from './CustomHook';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <CustomHook></CustomHook>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


