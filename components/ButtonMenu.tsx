import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const ButtonMenu: React.FC<CustomButtonProps> = ({ onPress, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      onPress={onPress}
    >
      <Image
        source={require('../assets/menu.png')}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: 25,
    height: 22,
  },
  img: {
    width: 25,
    height: 22,
    alignSelf: 'center',
  }
});

export default ButtonMenu;
