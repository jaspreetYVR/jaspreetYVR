import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Tabs } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from './src/components/layouts/Header';
import MoviesShowsContainer from './src/components/containers/MoviesShowsContainer';
import AppStack from './src/components/stacks/AppStack';
import TopTabs from './src/components/tabs/TopTabs';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
        <AppStack />
        <StatusBar style="auto" />
    </NativeBaseProvider>
    
  );
}
