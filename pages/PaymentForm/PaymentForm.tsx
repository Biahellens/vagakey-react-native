import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonMenu from '../../components/ButtonMenu';
import QRCode from "react-qr-code";
import * as Clipboard from 'expo-clipboard';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type ItemType = {
  label: string;
  value: string;
};

type PaymentFormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Pagamento'>;


const PaymentForm: React.FC = () => {
  const navigation = useNavigation<PaymentFormScreenNavigationProp>();

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<ItemType[]>([
    { label: 'Selecione um método', value: '' },
    { label: 'Cartão de Crédito/Débito', value: 'cartao' },
    { label: 'PIX', value: 'pix' },
    { label: 'Totem', value: 'totem' }
  ]);
  const [codigo, setCodigo] = useState('');

  const handleValueChange = (newValue: string | null) => {
    setValue(newValue);
  };

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

  const copiarCodigo = () => {
    Clipboard.setString(codigo);
    Alert.alert("Código copiado!", "O código PIX foi copiado para a área de transferência.");
  };

  const getVisibility = (method: string | null) => {
    return method === 'cartao' ? 'block' : method === 'pix' ? 'block' : method === 'totem' ? 'block' : 'none';
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <View style={styles.boxLogo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <ScrollView style={styles.boxContentSCroll}>
        <View style={styles.boxContent}>
          <Text style={styles.textPage}>Dados de Pagamento</Text>
          <View style={[styles.select, open && { zIndex: 2 }]}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Selecione um método"
            />
          </View>

          {getVisibility(value) === 'block' && value === 'cartao' && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Número do Cartão</Text>
              <TextInput style={styles.input} placeholder="9999 9999 9999 9999" />
              <Text style={styles.label}>Nome do Titular</Text>
              <TextInput style={styles.input} placeholder='Nome do titular' />
              <Text style={styles.label}>Data de Vencimento</Text>
              <TextInput style={styles.input} placeholder="MM/AAAA" />
              <Text style={styles.label}>CVV</Text>
              <TextInput style={styles.input} placeholder="999" />
            </View>
          )}

          {getVisibility(value) === 'block' && value === 'pix' && (
            <View style={styles.formGroup}>
              <QRCode
                size={300}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={codigo}
                viewBox={`0 0 256 256`}
              />
              <View style={styles.pixCode}>
                <Text style={styles.pixText}>{codigo}</Text>
                <TouchableOpacity onPress={copiarCodigo} style={styles.btnCopy}>
                  <AntDesign name="copy1" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {getVisibility(value) === 'block' && value === 'totem' && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Código Totem</Text>
              <TextInput style={styles.input} placeholder="Código alfanumérico" />
            </View>
          )}

          <View style={styles.btnRedirect}>
            <Button color={'#FF008A'} title="Pagar" onPress={() => navigation.navigate('Reservas')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    backgroundColor: '#006DD2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  boxContentSCroll: {
    width: '100%',
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
  formGroup: {
    marginTop: 20,
    width: '80%'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  pixText: {
    fontSize: 16,
    marginTop: 15,
  },
  pixCode: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  input: {
    height: 45,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FF008A',
  },
  select: {
    width: '80%',
    marginTop: 20,
  },
  btnRedirect: {
    backgroundColor: '#FF008A',
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  btnCopy: {
    marginLeft: 10,
    marginTop: 10
  },
});

export default PaymentForm;
