import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { supabase } from '../utils/supabase';
import { useAuthStore } from '../utils/authStore';

export default function CreateAccountScreen() {
  const { session, setHasProfile } = useAuthStore();

  // 1. Extract Google data from the session metadata
  const googleName = session?.user?.user_metadata?.full_name || '';
  const googleAvatar = session?.user?.user_metadata?.avatar_url || '';

  // 2. Initialize state. Full Name gets pre-filled!
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState(googleName);

  const handleCreateProfile = async () => {
    if (!session?.user) return;

    // 3. Insert into the profiles table, including the Google Avatar URL
    const { error } = await supabase
      .from('profiles')
      .insert([
        {
          id: session.user.id, 
          username: username,
          full_name: fullName,
          profile_pic_url: googleAvatar, // Saves the image link to your database
        }
      ]);

    if (error) {
      console.error("Error creating profile:", error);
    } else {
      setHasProfile(true); // Triggers the router to move to /(tabs)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>

      {/* 4. Display their Google Profile Picture if it exists */}
      {googleAvatar ? (
        <Image source={{ uri: googleAvatar }} style={styles.avatar} />
      ) : null}
      
      <TextInput
        style={styles.input}
        placeholder="Choose a Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      
      <Button title="Save Profile" onPress={handleCreateProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', // Centers the avatar and text
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 15, 
    borderRadius: 5,
    width: '100%' // Ensures inputs stretch across the screen
  }
});