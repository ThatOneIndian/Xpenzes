import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useAuthStore } from "../utils/authStore";
import { supabase } from "../utils/supabase";

export default function RootLayout() {
  const { session, isInitialized, setSession } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  // 1. Listen for Supabase auth changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Handle routing based on auth state
  useEffect(() => {
    if (!isInitialized) return;

    // Check if the user is in the (tabs) group
    const inAuthGroup = segments[0] === '(tabs)';

    if (session && !inAuthGroup) {
      // Logged in but not in tabs? Send them to the home screen.
      router.replace('/(tabs)');
    } else if (!session && inAuthGroup) {
      // Not logged in but trying to access tabs? Send them to sign in.
      router.replace('/sign-in');
    }
  }, [session, isInitialized, segments]);

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        {/* We just list the screens here, the useEffect handles the protection! */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="create-account" options={{ presentation: 'modal' }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </React.Fragment>
  );
}