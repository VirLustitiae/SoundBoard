import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Certifique-se de que o pacote @expo/vector-icons está instalado

const Contact = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.introduction}>
          Hello, I'm Vir Lustitiae, a passionate developer dedicated to creating solutions that impact and improve people's lives. I invite you to explore my work through the links below.
        </Text>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity style={styles.button} onPress={() => openLink('https://virlustitiae.github.io/Meu-site-pessoal/')}>
          <FontAwesome name="globe" size={24} color="black" />
          <Text style={styles.linkText}>My Website</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openLink('https://github.com/VirLustitiae')}>
          <FontAwesome name="github" size={24} color="black" />
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openLink('http://example.com')}>
          <FontAwesome name="github" size={24} color="black" />
          <Text style={styles.linkText}>Project GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    padding: 20,
  },
  textBox: {
    backgroundColor: '#000000', // Black background for the text box
    borderWidth: 2,
    borderColor: '#ffffff', // White border
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    width: '90%', // Width of the text box
  },
  introduction: {
    fontSize: 16,
    textAlign: 'justify', // Justify the text
    color: '#ffffff', // White text color
  },
  linkContainer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#000000', // Black border
    padding: 10,
    borderRadius: 5,
  },
  linkText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000000', // Black text
  }
});

export default Contact;
