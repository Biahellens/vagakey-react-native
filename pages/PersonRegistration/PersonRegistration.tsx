import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import CustomButton from '../../components/CustomButton';
import { register } from '../../services/authService'; // Importando a função de registro

type PersonRegistrationNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;

const PersonRegistration = () => {
  const navigation = useNavigation<PersonRegistrationNavigationProp>();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleRegister = async () => {
    if (senha !== confirmSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    } else try {
      const response = await register(nome, email, senha, telefone); // Chama a função de registro com os parâmetros corretos
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate('Login'); // Navega para a tela de login
    } catch (error) {
      Alert.alert("Erro", "Não foi possível completar o cadastro.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navbarLink}>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.page}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.formLogin}>
          <Text style={styles.title}>Dados Pessoais!</Text>
          <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="Confirmação de Senha" secureTextEntry value={confirmSenha} onChangeText={setConfirmSenha} placeholderTextColor="#cccccc" />

          <CustomButton
            title="Prosseguir"
            onPress={handleRegister}
            containerStyle={{ width: '100%' }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF008A',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  navbarLink: {
    color: '#ffffff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  logo: {
    width: 115,
    height: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  formLogin: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
    marginBottom: 20,
  },
  title: {
    color: '#FF008A',
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Righteous',
    fontWeight: '400',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#000000',
    width: '100%',
  },
});

export default PersonRegistration;
