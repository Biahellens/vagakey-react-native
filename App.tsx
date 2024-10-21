import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/Login/LoginScreen';
import HomeScreen from './pages/Home/HomeScreen';
import PaymentForm from './pages/PaymentForm/PaymentForm';
import PersonRegistration from './pages/PersonRegistration/PersonRegistration';
import SelectVacancy from './pages/SelectVacancy/SelectVacancy';
import ReservationsScreen from './pages/Reservations/Reservations';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Pagamento: undefined;
  Registro: undefined;
  Vagas: undefined;
  Reservas: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pagamento" component={PaymentForm} />
        <Stack.Screen name="Registro" component={PersonRegistration} />
        <Stack.Screen name="Vagas" component={SelectVacancy} />
        <Stack.Screen name="Reservas" component={ReservationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
