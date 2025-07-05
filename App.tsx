import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/assets/styleGuide';
import Root from './src/navigation/root';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={COLORS.BACKGROUND} barStyle={"light-content"} />
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})