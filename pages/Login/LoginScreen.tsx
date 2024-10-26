import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { login } from '../../services/authService';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface IFormInput {
  email: string;
  senha: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await login(data.email, data.senha); //chama a função de login do authService
      if (response){
        navigation.navigate('Home'); //navega para a tela home se sucesso
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro de login', 'Falha ao fazer login, verifique suas credenciais.');
    }
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.boxContent}>
        <Text style={styles.title}>Bem-vindo ao VAGAKEY</Text>
        <Image
          source={require('../../assets/carLogin.png')}
          style={styles.imgCar}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder='E-mail'
              />
              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </View>
          )}
        />

        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                placeholder='Senha'
              />
              {errors.senha && <Text style={styles.errorText}>{errors.senha.message}</Text>}
            </View>
          )}
        />
        <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />

        <Text style={styles.text}>Esqueceu a senha?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.text}>Cadastre-se</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Termos e Privacidade</Text>
      </View>

      <View style={styles.boxFooter}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  boxHeader: {
    width: '100%',
    height: 80,
    backgroundColor: '#FF008A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContent: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  boxFooter: {
    width: '100%',
    height: 34,
    backgroundColor: '#FF008A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    fontFamily: 'Righteous',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#FF008A',
  },
  text: {
    marginTop: 10,
    fontFamily: 'Righteous',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#006DD2',
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    padding: 1.5,
    width: 235,
    height: 45,
    borderWidth: 1,
    borderColor: '#9C9C9C',
    borderRadius: 5,

  },
  errorText: {
    color: 'red',
  },
  imgCar: {
    width: 115,
    height: 86,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  logo: {
    width: 115,
    height: 25,
    alignSelf: 'center',
  },
});

export default LoginScreen;
