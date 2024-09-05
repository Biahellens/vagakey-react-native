import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/Login/LoginScreen';
import HomeScreen from './pages/Home/HomeScreen';
import PaymentForm from './pages/PaymentForm/PaymentForm';
import PersonRegistration from './pages/PersonRegistration/PersonRegistration';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  PaymentForm: undefined;
  PersonRegistration: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PaymentForm" component={PaymentForm} />
        <Stack.Screen name="PersonRegistration" component={PersonRegistration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
