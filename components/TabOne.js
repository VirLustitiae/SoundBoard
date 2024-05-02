import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import SoundButton from './SoundButton'; 

const TabOne = () => {
  const [sound, setSound] = useState();

  useEffect(() => {
    
    return sound ? () => {
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

  const playSound = async (soundFile) => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(soundFile);
    setSound(newSound);
    await newSound.playAsync();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.column}>
          <SoundButton
            image={require('../assets/images/tab1/button-image1.png')}
            sound={require('../assets/sounds/tab1/sound1.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab1/sound1.mp3'))}
            text="Devagar Xandao"
          />
          <SoundButton
            image={require('../assets/images/tab1/button-image2.png')}
            sound={require('../assets/sounds/tab1/sound2.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab1/sound2.mp3'))}
            text="Ze Gotinha"
          />
          <SoundButton
            image={require('../assets/images/tab1/button-image3.png')}
            sound={require('../assets/sounds/tab1/sound3.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab1/sound3.mp3'))}
            text="Meu Passado"
          />
        </View>
        <View style={styles.column}>
          <SoundButton
            image={require('../assets/images/tab1/button-image4.png')}
            sound={require('../assets/sounds/tab1/sound4.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab1/sound4.mp3'))}
            text="Bater em Mulher"
          />
          <SoundButton
            image={require('../assets/images/tab1/button-image5.png')}
            sound={require('../assets/sounds/tab1/sound5.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab1/sound5.mp3'))}
            text="Programador Front-End"
          />
          <SoundButton
            image={require('../assets/images/tab1/button-image6.png')}
            sound={require('../assets/sounds/tab1/sound6.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab1/sound6.mp3'))}
            text="Entrar o Grosso"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 20 
  },
});

export default TabOne;
