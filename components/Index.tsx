import { View, Text, TouchableOpacity, Alert, SafeAreaView, TextInput, Pressable, Button } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function Index({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const validUsername = 'nibol';
    const validPassword = 'Temporal123';

    if (username === validUsername && password === validPassword) {
      Alert.alert('Éxito', 'Has iniciado sesión correctamente');
      navigation.navigate('Main'); 
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };
  return (

    <SafeAreaView style={{ flex: 1 }} >
      <View style={styles.container}>
        <Text style={styles.title}>NIBOL</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#8e8e93"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8e8e93"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f2f2f7',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
    color: '#1c1c1e',
  },
  input: {
    height: 50,
    borderColor: '#d1d1d6',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#1c1c1e',
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});