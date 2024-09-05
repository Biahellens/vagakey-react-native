import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type ItemType = {
  label: string;
  value: string;
};

const PaymentForm: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<ItemType[]>([
    { label: 'Selecione um método', value: '' },
    { label: 'Cartão de Crédito/Débito', value: 'cartao' },
    { label: 'PIX', value: 'pix' },
    { label: 'Totem', value: 'totem' }
  ]);

  const handleValueChange = (newValue: string | null) => {
    setValue(newValue);
  };

  const getVisibility = (method: string | null) => {
    return method === 'cartao' ? 'block' : method === 'pix' ? 'block' : method === 'totem' ? 'block' : 'none';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Dados de Pagamento</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Selecione um método"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        containerStyle={styles.dropdownContainer}
        dropDownContainerStyle={styles.dropdownDropDown}
      />

      {getVisibility(value) === 'block' && value === 'cartao' && (
        <View style={styles.formGroup}>
          <Text style={styles.label}>Número do Cartão</Text>
          <TextInput style={styles.input} placeholder="9999 9999 9999 9999" />
          <Text style={styles.label}>Nome do Titular</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Data de Vencimento</Text>
          <TextInput style={styles.input} placeholder="MM/AAAA" />
          <Text style={styles.label}>CVV</Text>
          <TextInput style={styles.input} placeholder="999" />
        </View>
      )}

      {getVisibility(value) === 'block' && value === 'pix' && (
        <View style={styles.formGroup}>
          <Text style={styles.label}>Chave PIX</Text>
          <TextInput style={styles.input} placeholder="Chave aleatória" />
        </View>
      )}

      {getVisibility(value) === 'block' && value === 'totem' && (
        <View style={styles.formGroup}>
          <Text style={styles.label}>Código Totem</Text>
          <TextInput style={styles.input} placeholder="Código alfanumérico" />
        </View>
      )}

      <Button title="Pagar" onPress={() => {}} color="#00aaff" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  dropdown: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownContainer: {
    width: '100%',
  },
  dropdownDropDown: {
    backgroundColor: '#ffffff',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
});

export default PaymentForm;
