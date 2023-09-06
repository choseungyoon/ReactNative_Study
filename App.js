import { StyleSheet, View,Text, TextInput, Button} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="이름을 입력하세요"
        onChangeText={input => setName(input)}
        value={name}
      />
      <TextInput
        placeholder="나이를 입력하세요"
        onChangeText={input => setAge(input)}
        value={age}
      />
      <Button
        title="제출"
        onPress={() => alert(`이름: ${name}, 나이: ${age}`)}
      />
      <Text>이름: {name}</Text>
      <Text>나이: {age}</Text>
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


