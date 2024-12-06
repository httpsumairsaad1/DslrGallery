import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false  }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false  }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
