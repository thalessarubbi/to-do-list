import { Home } from './src/screens/Home'
import { StatusBar } from 'react-native'
import { 
  useFonts, 
  Inter_700Bold, 
  Inter_400Regular
} from '@expo-google-fonts/inter'

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Regular: Inter_400Regular,
    Bold: Inter_700Bold
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Home />
    </>
  )
}

