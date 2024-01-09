// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardDisplay from './DashboardDisplay';
import RegistrationScreen from './RegistrationScreen';
import user_signinScreen from './user_signinScreen';
import { AuthProvider } from './Authelement';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="user_signinScreen" component={user_signinScreen} />
          <Stack.Screen name="DashboardDisplay" component={DashboardDisplay} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default Navigation;
