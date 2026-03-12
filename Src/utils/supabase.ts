import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import * as Linking from 'expo-linking';

//Setup the Client
export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!, 
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// Helper to extract session from URL
export const createSessionFromUrl = async (url: string) => {
  console.log("Parsing URL for tokens:", url);
  
  const fragment = url.split('#')[1];
  
  if (!fragment) {
    console.log("No hash fragment found in the URL.");
    return;
  }

  const params = new URLSearchParams(fragment);
  const access_token = params.get('access_token');
  const refresh_token = params.get('refresh_token');

  //Check for BOTH tokens so TypeScript knows they are strictly strings
  if (!access_token || !refresh_token) {
    console.log("Missing access or refresh token in the fragment.");
    return;
  }

  const { error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });

  if (error) {
    console.error("Error setting session in Supabase:", error);
  } else {
    console.log("Session set successfully!");
  }
};

//Listen for the Deep Link
Linking.addEventListener('url', ({ url }) => {
  if (url) createSessionFromUrl(url);
});