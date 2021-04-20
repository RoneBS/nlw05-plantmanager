import React from 'react';
import { useState } from 'react';
import { 
    Image, 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    TouchableOpacityProps,
    Dimensions
  } from 'react-native'

import wateringImg from '../../assets/watering.png'
import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps  {
  title: string;
}

export default function Welcome({ title }: ButtonProps){
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma facil
      </Text>
      
      
        <Image 
          source={wateringImg} 
          style={styles.img}
          resizeMode="contain"
          />
     

      <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}
        
      >
        <Text 
          style={styles.buttonText}>
          >
        </Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 58
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    paddingHorizontal: 20,
    color: colors.heading
  },
  img: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
  

});