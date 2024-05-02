import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import SoundButton from './SoundButton'; 

const TabTwo = () => {
  const [sound, setSound] = useState();

  useEffect(() => {
    // Garantir que o som seja liberado quando o componente for desmontado
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
            image={require('../assets/images/tab2/button-image1.png')}
            sound={require('../assets/sounds/tab2/sound1.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab2/sound1.mp3'))}
            text="Te Dou Outra"
          />
          <SoundButton
            image={require('../assets/images/tab2/button-image2.png')}
            sound={require('../assets/sounds/tab2/sound2.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab2/sound2.mp3'))}
            text="Papuda Te Espera"
          />
          <SoundButton
            image={require('../assets/images/tab2/button-image3.png')}
            sound={require('../assets/sounds/tab2/sound3.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab2/sound3.mp3'))}
            text="Conversa Sem Palavrao"
          />
        </View>
        <View style={styles.column}>
          <SoundButton
            image={require('../assets/images/tab2/button-image4.png')}
            sound={require('../assets/sounds/tab2/sound4.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab2/sound4.mp3'))}
            text="Vida De Programador"
          />
          <SoundButton
            image={require('../assets/images/tab2/button-image5.png')}
            sound={require('../assets/sounds/tab2/sound5.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab2/sound5.mp3'))}
            text="Pintou um clima"
          />
          <SoundButton
            image={require('../assets/images/tab2/button-image6.png')}
            sound={require('../assets/sounds/tab2/sound6.mp3')}
            onPress={() => playSound(require('../assets/sounds/tab2/sound6.mp3'))}
            text="Ja expliquei"
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

export default TabTwo;
