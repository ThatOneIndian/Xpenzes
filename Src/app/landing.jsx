import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { supabase } from '../utils/supabase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Expenzes!</Text>
      <Link href="/index">
        <View style={styles.card}>
          <Text style={styles.cardText}>Go!</Text>
        </View>
      </Link>
      <Text style={{ fontSize: 25, height: 100 }}>Tap the button to get started</Text>
      <Link href='/index'> <Text>Go to Home</Text> </Link>
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
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#4cfd6fff',
    padding: 20,
    borderRadius: 5,
    marginVertical: 5,
    boxShadow: '4px 4px rgba(0, 0, 0, 0.1)',
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
