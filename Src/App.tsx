import { StatusBar } from 'expo-status-bar';
import { Link, Router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { supabase } from './utils/supabase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80, fontWeight: 'bold', height : 600, alignItems : 'center', justifyContent: 'center' }}>Welcome To Expenzes!</Text>
      <Button 
        title="GO!"
        color="#841584" 
        onPress={() => {}} 
        />
      <Text style={{ fontSize: 25, height: 100 }}>Tap the button to get started</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
    backgroundColor: '#63d963',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
});
