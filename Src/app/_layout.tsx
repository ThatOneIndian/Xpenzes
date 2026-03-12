import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useAuthStore } from "../utils/authStore";
import { supabase } from "../utils/supabase";

export default function RootLayout() {
  const { session, isInitialized, hasProfile, setSession } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  // 1. Listen for Supabase auth changes (No changes needed here!)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Handle routing based on auth and profile state
  useEffect(() => {
    if (!isInitialized || hasProfile === null) return;

    // Check which top-level route group we are currently in
    const inAppGroup = segments[0] === '(app)';
    const inAuthGroup = segments[0] === '(auth)';
    
    // Check if we are specifically on the create-account screen
    // Check if 'create-account' exists anywhere in the current path
    const isOnCreateAccount = segments.includes('create-account');
    if (!session && inAppGroup) {
      // 1. NOT logged in, but trying to access the app -> Send to Sign In
      router.replace('/(auth)/sign-in');
      
    } else if (session && !hasProfile && (!inAuthGroup || !isOnCreateAccount)) {
      // 2. LOGGED IN, but NO PROFILE, and not currently on the creation screen -> Send to Create Account
      router.replace('/(auth)/create-account');
      
    } else if (session && hasProfile && !inAppGroup) {
      // 3. LOGGED IN AND HAS PROFILE, but stuck in the auth screens -> Send to Home
      router.replace('/(app)/(tabs)/Home');
    }
    
  }, [session, isInitialized, hasProfile, segments]);

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        {/* We map the Route Groups here instead of individual files */}
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </React.Fragment>
  );
}