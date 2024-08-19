import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { mockUsers } from '../api/Mockup';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = mockUsers.find(u => u.username === username && u.password === password);

    if (user) {
      if (user.role === 'homeowner') {
        navigation.navigate('HomeOwner');
      } else if (user.role === 'guard') {
        navigation.navigate('SecurityGuard');
      }
    } else {
      Alert.alert('Invalid credentials', 'Please check your username and password');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
