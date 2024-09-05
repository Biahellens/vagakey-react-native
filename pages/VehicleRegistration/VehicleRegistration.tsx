import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const VehicleForm = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dropdownValue, setDropdownValue] = React.useState(null);
  const [dropdownItems, setDropdownItems] = React.useState([
    { label: 'Carro', value: 'carro' },
    { label: 'Moto', value: 'moto' },
    { label: 'Outro', value: 'outro' },
  ]);

  const [special, setSpecial] = React.useState<string | null>(null);
  
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.navbar}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Histórico</Text>
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropbtn}>
            <Text style={styles.navItem}>Meu Perfil</Text>
          </TouchableOpacity>
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownItem}>Carteira</Text>
            <Text style={styles.dropdownItem}>SEO</Text>
            <Text style={styles.dropdownItem}>Design</Text>
          </View>
        </View>
        <Text style={styles.navItem}>O VagaKey</Text>
        <Text style={styles.navItem}>Contato</Text>
      </View>

      <View style={styles.formCadVeic}>
        <Text style={styles.heading}>Dados do Veículo</Text>

        <Text style={styles.label}>Tipo de veículo</Text>
        <DropDownPicker
          open={dropdownOpen}
          value={dropdownValue}
          items={dropdownItems}
          setOpen={setDropdownOpen}
          setValue={setDropdownValue}
          setItems={setDropdownItems}
          placeholder="Selecione..."
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownList}
          textStyle={styles.dropdownText}
        />

        <Text style={styles.label}>Modelo</Text>
        <TextInput style={styles.input} placeholder="SUV / Hatch / Sedan / Etc..." />

        <Text style={styles.label}>Cor</Text>
        <TextInput style={styles.input} placeholder="Vermelho / Prata / Preto / Etc..." />

        <Text style={styles.label}>Ano</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="AAAA" />

        <Text style={styles.label}>Placa</Text>
        <TextInput style={styles.input} placeholder="A1BC23" />

        <Text style={styles.label}>Veículo Especial?</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity style={styles.radioButton} onPress={() => setSpecial('sim')}>
            <Text style={styles.radioText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioButton} onPress={() => setSpecial('nao')}>
            <Text style={styles.radioText}>Não</Text>
          </TouchableOpacity>
        </View>

        <Button title="Prosseguir" color="#333333" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000000',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 15,
    width: '100%',
  },
  navItem: {
    color: '#ffffff',
    fontSize: 18,
  },
  dropdown: {
    position: 'relative',
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  dropdownList: {
    backgroundColor: '#ffffff',
  },
  dropdownText: {
    color: '#000000',
  },
  dropdownContent: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    zIndex: 1,
  },
  dropdownItem: {
    color: '#333333',
    padding: 12,
    textAlign: 'center',
  },
  formCadVeic: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 500,
    color: '#000000',
  },
  heading: {
    color: '#000000',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  radioText: {
    marginLeft: 5,
  },
  dropbtn: {

  }
});

export default VehicleForm;
