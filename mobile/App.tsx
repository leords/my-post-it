
import { Routes } from './src/routes/router';
import AppLoading from 'expo-app-loading';
import { useFonts, 
  Roboto_500Medium, 
  Roboto_900Black, 
  Roboto_700Bold, 
  Roboto_400Regular, 
  Roboto_300Light 
} from '@expo-google-fonts/roboto';

import React from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_500Medium, 
    Roboto_900Black, 
    Roboto_700Bold, 
    Roboto_400Regular, 
    Roboto_300Light
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes/>
  );
}

