import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import ButtonMenu from '../../components/ButtonMenu';
import DropDownPicker from 'react-native-dropdown-picker';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

type SelectVacancyNavigationProp = StackNavigationProp<RootStackParamList, 'Vagas'>;

interface IFormInput {
  modelo: string;
  placa: string;
}

const schema = yup.object().shape({
  modelo: yup.string().required('Modelo é obrigatório'),
  placa: yup.string().required('Placa é obrigatória'),
});

const SelectVacancy: React.FC = () => {
  const navigation = useNavigation<SelectVacancyNavigationProp>();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Veículo Comum', value: '01' },
    { label: 'Motocicletas', value: '02' },
    { label: 'Veículo para deficientes', value: '03' },
    { label: 'Veículo para idosos', value: '04' },
    { label: 'Veículo para gestantes', value: '05' },
    { label: 'Veículo elétricos', value: '06' },
  ]);

  const [openNVacancy, setOpenNVacancy] = useState(false);
  const [valueNVacancy, setValueNVacancy] = useState(null);
  const [itemsNVacancy, setItemsNVacancy] = useState([
    { label: '01', value: '01' },
    { label: '02', value: '02' },
    { label: '03', value: '03' },
    { label: '04', value: '04' },
    { label: '05', value: '05' },
  ]);

  const [openVacancy, setOpenVacancy] = useState(false);
  const [valueVacancy, setValueVacancy] = useState(null);
  const [itemsVacancy, setItemsVacancy] = useState([
    { label: 'A10', value: '01' },
    { label: 'A15', value: '02' },
    { label: 'B10', value: '03' },
    { label: 'B15', value: '04' },
    { label: 'C10', value: '05' },
    { label: 'C15', value: '06' },
  ]);

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [date, setDate] = useState(new Date());
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
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
          <View style={styles.selectedParking}>
            <Text>VAGAKEY - Shopping Pátio Higienopólis</Text>
          </View>

          <View style={styles.dateSelect}>
            <Text style={{ marginBottom: 10 }}>Selecione a data da reserva</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              onChange={onChange}
              themeVariant='light'

            />
          </View>

          <View style={styles.dateSelect}>
            <Text style={{ marginBottom: 10 }}>Selecione o horário inicio da reserva</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'time'}
              is24Hour={true}
              onChange={onChange}
              themeVariant='light'

            />
          </View>

          <View style={[styles.select, open && { zIndex: 10 }]}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder='Escolha o tipo da vaga'
              style={{ backgroundColor: '#ffffff' }}
              dropDownContainerStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#9C9C9C',
                borderWidth: 1,
              }}
              listItemContainerStyle={{
                height: 50,
                justifyContent: 'center',
                paddingHorizontal: 10,
                borderBottomColor: '#ffffff',
                borderBottomWidth: 1,
                backgroundColor: '#ffffff',
              }}
            />
          </View>
          <View style={[styles.select, openNVacancy && { zIndex: 9 }]}>
            <DropDownPicker
              open={openNVacancy}
              value={valueNVacancy}
              items={itemsNVacancy}
              setOpen={setOpenNVacancy}
              setValue={setValueNVacancy}
              setItems={setItemsNVacancy}
              placeholder='Escolha o número de vagas'
              style={{ backgroundColor: '#ffffff' }}
              dropDownContainerStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#9C9C9C',
                borderWidth: 1,
              }}
              listItemContainerStyle={{
                height: 50,
                justifyContent: 'center',
                paddingHorizontal: 10,
                borderBottomColor: '#ffffff',
                borderBottomWidth: 1,
                backgroundColor: '#ffffff',
              }}
            />
          </View>
          <View style={[styles.select, openVacancy && { zIndex: 8 }]}>
            <DropDownPicker
              open={openVacancy}
              value={valueVacancy}
              items={itemsVacancy}
              setOpen={setOpenVacancy}
              setValue={setValueVacancy}
              setItems={setItemsVacancy}
              placeholder='Selecione a vaga'
              style={{ backgroundColor: '#ffffff' }}
              dropDownContainerStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#9C9C9C',
                borderWidth: 1,
              }}
              listItemContainerStyle={{
                height: 50,
                justifyContent: 'center',
                paddingHorizontal: 10,
                borderBottomColor: '#ffffff',
                borderBottomWidth: 1,
                backgroundColor: '#ffffff',
              }}
            />
          </View>

          <Controller
            control={control}
            name="modelo"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder='Modelo'
                />
                {errors.modelo && <Text style={styles.errorText}>{errors.modelo.message}</Text>}
              </View>
            )}
          />
          <Controller
            control={control}
            name="placa"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder='Placa'
                />
                {errors.placa && <Text style={styles.errorText}>{errors.placa.message}</Text>}
              </View>
            )}
          />

          <View style={styles.btnRedirect}>
            <Button color={'#ffffff'} title="Revisar e reservar" onPress={() => navigation.navigate('Pagamento')} />
          </View>
          <View style={styles.btnRedirect}>
            <Button color={'#ffffff'} title="Retornar" onPress={() => navigation.navigate('Home')} />
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
  select: {
    width: '80%',
    marginTop: 20,
  },
  textToday: {
    fontSize: 16,
    color: '#FF008A',
    fontWeight: '700'
  },
  selectedParking: {
    width: '80%',
    marginTop: 40,
    borderColor: '#9C9C9C',
    borderRadius: 5,
    borderStyle: 'solid',
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
    height: 45,
  },
  input: {
    padding: 10,
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#9C9C9C',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: '#000000'
  },
  errorText: {
    color: 'red',
  },
  dateSelect: {
    width: '80%',
    height: 80,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  btnRedirect: {
    backgroundColor: '#FF008A',
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
  }
});

export default SelectVacancy;
