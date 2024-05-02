import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

// Componente reutilizável de botão de som
const SoundButton = ({ image, sound, onPress, text }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={image} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 100,  // Tamanho do botão
    height: 120, // Altura ajustada para acomodar o texto
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonImage: {
    width: 90,
    height: 90,
  },
  buttonText: {
    fontWeight: 'bold', // Deixa o texto em negrito
    marginTop: 5,       // Espaçamento entre a imagem e o texto
  },
});

export default SoundButton;
