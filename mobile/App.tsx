import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, 
  Roboto_500Medium, 
  Roboto_900Black, 
  Roboto_700Bold, 
  Roboto_400Regular, 
  Roboto_300Light 
} from '@expo-google-fonts/roboto';

import { AppRoutes } from './src/routes/app.routes';

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
    <AppRoutes />
  );
}

