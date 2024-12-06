import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topCircle} />
      <Image 
        source={require('../assets/while-dslr.png')} 
        style={{
          ...styles.dslrImage,
          marginTop: 50, // Reduced margin to minimize the gap
        }} 
      />
      <Image 
        source={require('../assets/ClickCart.png')} 
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
          marginBottom: 0, // Minimal space between logo and DSLR image
        }} 
      />
      {/* Glassmorphism Effect */}
      <View style={styles.glassContainer}>
        <Text style={styles.title}>Capture Moments</Text>
        <Text style={styles.subtitle}>Photography Redefined</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131416',
    justifyContent: 'center', // Center items vertically
    alignItems: 'center',
    paddingVertical: 20, // Adjusted padding
  },
  topCircle: {
    position: 'absolute',
    top: -200,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#484C57',
  },
  dslrImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  glassContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(72, 76, 87, 0.2)',
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
    marginTop: 20, // Adds space above the glass container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCC',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#484C57',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20, // Adds space above the button
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
