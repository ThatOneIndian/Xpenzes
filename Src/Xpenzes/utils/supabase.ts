import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = https://nryqxwzyrkmaptecvref.supabase.co;
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeXF4d3p5cmttYXB0ZWN2cmVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MzY1OTUsImV4cCI6MjA3MTIxMjU5NX0.aJCgwiBQqxK8cDAAfaUgg4GKTWcbpi3w5eeQeRN6p_0;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
