import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import * as Linking from 'expo-linking';

// 1. Setup the Client
// Note: We removed 'processLock' (not needed for React Native)
export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!, 
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false, // We handle the URL manually below
    },
  }
);

// 2. Helper to extract session from URL
const createSessionFromUrl = async (url: string) => {
  // FIX: Use Expo's official parser instead of the deep import 'expo-auth-session/build/...'
  // This is safer because internal paths like 'build/QueryParams' can change and break your app.
  const { queryParams } = Linking.parse(url);
  
  // Supabase usually sends tokens in the hash (#) but sometimes query (?), so we check both.
  // We explicitly cast to string to satisfy TypeScript.
  const access_token = (queryParams?.access_token as string) || 
    url.split('access_token=')[1]?.split('&')[0];
                       
  const refresh_token = (queryParams?.refresh_token as string) || 
    url.split('refresh_token=')[1]?.split('&')[0];

  if (!access_token) return;

  const { error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });

  if (error) console.error("Error setting session:", error);
};

// 3. Listen for the Deep Link (Returning from Google)
Linking.addEventListener('url', ({ url }) => {
  if (url) createSessionFromUrl(url);
});