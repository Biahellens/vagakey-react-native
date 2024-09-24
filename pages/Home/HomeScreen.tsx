import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import ButtonMenu from '../../components/ButtonMenu';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Region } from 'react-native-maps';

import * as Location from 'expo-location';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'VAGAKEY - Shopping Pátio Higienopólis', value: '01' },
    { label: 'VAGAKEY - Shopping Cidade São Paulo', value: '02' },
    { label: 'VAGAKEY - Rua Haddock Lobo', value: '03' },
  ]);

  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (location) {
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    })();
  }, []);

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

      <View style={styles.boxContent}>
        <Text style={styles.textToday}>Segunda - 14 de ABRIL de 2024</Text>
        <View style={styles.select}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder='Busque o local para estacionar'
            style={{ backgroundColor: '#ffffff' }}
            dropDownContainerStyle={{
              backgroundColor: '#ffffff',
            }}
          />
        </View>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={region} />
        </View>
        <Button title="Ir para pagamento" onPress={() => navigation.navigate('PaymentForm')} />
      </View>

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
    height: 600,
    alignItems: 'center',
    padding: 10
  },
  select: {
    width: '80%',
    marginTop: 40,
    zIndex: 2,
    position: 'absolute',
  },
  textToday: {
    fontSize: 16,
    color: '#FF008A',
    fontWeight: '700'
  },
  mapContainer: {
    marginTop: 10,
    width: 285,
    height: 285,
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
