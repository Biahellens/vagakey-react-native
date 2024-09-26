import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import ButtonMenu from '../../components/ButtonMenu';
import QRCode from 'react-qr-code';

type ReservationsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const ReservationsScreen: React.FC = () => {
  const navigation = useNavigation<ReservationsScreenNavigationProp>();

  const [codigo, setCodigo] = useState('');
  const [qrCode, setQrCode] = useState(false);

  useEffect(() => {
    function gerarCodigoAleatorio() {
      const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let codigoGerado = '';
      for (let i = 0; i < 25; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigoGerado += caracteres[indiceAleatorio];
      }
      return codigoGerado;
    }

    const novoCodigo = gerarCodigoAleatorio();
    setCodigo(novoCodigo);

  }, []);

  const expansiveCode = () => {
    setQrCode(!qrCode)
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <View style={styles.boxLogo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.boxMenu}>
          <ButtonMenu />
          <Text style={styles.textWelcome}>Bem-vindo(a)</Text>
          <Image
            source={require('../../assets/user_icon.png')}
            style={styles.userIcon}
          />
        </View>
      </View>
      <ScrollView style={styles.boxContentSCroll}>
        <View style={styles.boxContent}>
          <Text style={styles.textPage}>Vagas reservadas</Text>
          <View style={styles.boxImg}>
            <Image
              source={require('../../assets/groupCars.png')}
              style={styles.imgCars}
            />
          </View>
          <View style={[styles.cardVacancy, qrCode === true ? {height: '80%'} : {height: 260}]}>
            <Text style={styles.textVacancy}>VagaKey - Reserva </Text>
            <View style={styles.barCode}>
              <TouchableOpacity onPress={expansiveCode} >
                <QRCode
                  size={qrCode === true ? 260 : 140}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={codigo}
                  viewBox={`0 0 256 256`}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardText}>
              <Text style={styles.textVacancy}>Avenida Paulista, 1234</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.textVacancy}>Meio período</Text>
                <Text style={styles.textVacancy}>18 de mar. 2024</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      <View style={styles.boxFooter}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  boxHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  boxLogo: {
    width: '100%',
    height: 80,
    backgroundColor: '#9400C8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMenu: {
    width: '100%',
    height: 45,
    backgroundColor: '#FF008A',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  textWelcome: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
  userIcon: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  logo: {
    width: 115,
    height: 25,
    alignSelf: 'center',
  },
  boxFooter: {
    width: '100%',
    height: 34,
    backgroundColor: '#9400C8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContent: {
    width: '100%',
    flexDirection: 'column',
    height: 'auto',
    alignItems: 'center',
    padding: 10,
  },
  textPage: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
    color: '#333',
  },
  cardVacancy: {
    height: 260,
    width: '100%',
    backgroundColor: '#FF008A',
    borderRadius: 5,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  textVacancy: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 10
  },
  cardFooter: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  cardText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  barCode: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxImg: {
    width: '100%',
    height: 'auto',
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCars: {
    width: 335,
    height: 120,
  },
  boxContentSCroll: {
    width: '100%',
  },
});

export default ReservationsScreen;
