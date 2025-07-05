import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/assets/styleGuide';
import Root from './src/navigation/root';


const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.BACKGROUND} barStyle={"light-content"} />
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})