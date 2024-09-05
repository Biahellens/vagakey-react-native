import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PersonRegistration = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.navbarLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navbarLink}>Histórico</Text>
        </TouchableOpacity>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownButton}>Meu Perfil</Text>
          <View style={styles.dropdownContent}>
            <TouchableOpacity>
              <Text style={styles.dropdownItem}>Carteira</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dropdownItem}>SEO</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dropdownItem}>Design</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.navbarLink}>O VagaKey</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navbarLink}>Contato</Text>
        </TouchableOpacity>
        <View style={styles.logo}><Text>Logo</Text></View>
      </View>

      <View style={styles.page}>
        <View style={styles.formLogin}>
          <Text style={styles.title}>Dados Pessoais!</Text>
          <Text style={styles.infoText}>
            Se você já possui uma conta, faça o <Text style={styles.link}>login</Text> para acessar o sistema.
          </Text>
          <Text style={styles.infoText}>
            Digite os seus dados de acesso no campo abaixo.
          </Text>

          <TextInput style={styles.input} placeholder="Digite seu nome completo" placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="Somente números" keyboardType="numeric" placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="Seu melhor e-mail" keyboardType="email-address" placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="+55 (DDD) XXXXX-XXXX" keyboardType="phone-pad" placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#cccccc" />
          <TextInput style={styles.input} placeholder="Confirmação de Senha" secureTextEntry placeholderTextColor="#cccccc" />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  navbarLink: {
    color: '#ffffff',
    fontSize: 18,
  },
  dropdown: {
    position: 'relative',
  },
  dropdownButton: {
    color: '#ffffff',
    fontSize: 18,
  },
  dropdownContent: {
    position: 'absolute',
    top: 50,
    left: 0,
    backgroundColor: '#ffffff',
    minWidth: 160,
    zIndex: 1,
  },
  dropdownItem: {
    color: '#000000',
    padding: 12,
  },
  logo: {
    // Style as needed
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
  },
  formLogin: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 500,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 20,
  },
  infoText: {
    color: '#000000',
    marginBottom: 10,
  },
  link: {
    color: '#00aaff',
    textDecorationLine: 'underline',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#000000',
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default PersonRegistration;
