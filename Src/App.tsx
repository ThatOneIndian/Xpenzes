import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { supabase } from './utils/supabase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80, fontWeight: 'bold', height : 500, alignItems : 'center' }}>Welcome {'\n'} To Expenzes!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Welcome to Supabase with React Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
