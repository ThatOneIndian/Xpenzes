import { StatusBar } from 'expo-status-bar';
import { Link, Router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { supabase } from './utils/supabase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80, fontWeight: 'bold', height : 600, alignItems : 'center', justifyContent: 'center' }}>Welcome To Expenzes!</Text>
      <Text style={{ fontSize: 25, height: 100 }}>Swipe to the left to continue!</Text>
      <StatusBar style="auto" />
      <Link href="/about">About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
    backgroundColor: '#63d963',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
