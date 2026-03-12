import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { supabase } from '../../utils/supabase';
import { useAuthStore } from '../../utils/authStore';

export default function CreateAccountScreen() {
  const { session, setHasProfile } = useAuthStore();

  const googleName = session?.user?.user_metadata?.full_name || '';
  const googleAvatar = session?.user?.user_metadata?.avatar_url || '';

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState(googleName);
  
  // NEW: State to hold our error message
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleCreateProfile = async () => {
    if (!session?.user) return;
    
    // Clear any previous errors
    setErrorMessage('');

    // 1. Check if the username is empty
    if (!username.trim()) {
      setErrorMessage("Please enter a username.");
      return;
    }

    // 2. Query the database to see if the username already exists
    const { data: existingUser, error: searchError } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', username.trim())
      .single();

    // If 'existingUser' comes back with data, the username is taken!
    if (existingUser) {
      setErrorMessage("This username has already been taken.");
      return;
    }

    // 3. If the username is free, proceed with the insert
    const { error: insertError } = await supabase
      .from('profiles')
      .insert([
        {
          id: session.user.id, 
          username: username.trim().toLowerCase(), // Good practice to force lowercase usernames
          full_name: fullName,
          profile_pic_url: googleAvatar, 
        }
      ]);

    if (insertError) {
      console.error("Error creating profile:", insertError);
      setErrorMessage("Something went wrong saving your profile.");
    } else {
      setHasProfile(true); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>

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

      {/* NEW: Display the error message in red if it exists */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      
      <Button title="Save Profile" onPress={handleCreateProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
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
    width: '100%' 
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center'
  }
});