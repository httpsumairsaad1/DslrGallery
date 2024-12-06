import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'User registered successfully!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <LinearGradient colors={['#151515', '#131416']} style={styles.container}>
      {/* Logo */}
      <View style={styles.topCircle} />
      <Image source={require('../assets/old-camera.png')} style={styles.dslrImage} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignUp();
          navigation.navigate('Home');
        }}
      >
      <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignIn();
          navigation.navigate('Home');
        }}
      >
      <Text style={styles.buttonText}>SignIn</Text>
      </TouchableOpacity>


      {/* Connect With Google and Facebook */}
      <Text style={styles.connectText}>Or connect with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#D44638' }]}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4267B2' }]}>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCircle: {
    position: 'absolute',
    top: -200, // Pushes the circle half out of the screen
    width: 400,
    height: 400,
    borderRadius: 200, // Makes it a circle
    backgroundColor: '#484C57',
  },
  dslrImage: {
    width: 300,
    height: 300,
    marginRight: 60,
    resizeMode: 'contain',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 0,
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#484C57',
    borderRadius: 50,
    paddingHorizontal: 15,
    color: '#FFF',
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#484C57',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  connectText: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  socialButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
