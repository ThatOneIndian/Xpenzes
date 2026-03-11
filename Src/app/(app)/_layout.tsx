import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useAuthStore } from "../utils/authStore";
import { supabase } from "../utils/supabase";

export default function RootLayout() {
  // FIX: Added hasProfile here so the useEffect can see it!
  const { session, isInitialized, hasProfile, setSession } = useAuthStore();
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
    // Wait until we know both the session AND profile status
    if (!isInitialized || hasProfile === null) return;

    const inAuthGroup = segments[0] === '(tabs)';
    const inCreateAccount = segments[0] === 'create-account';

    if (session && hasProfile && !inAuthGroup) {
      // Logged in AND has a profile? Send to Home.
      router.replace('/Home');
    } else if (session && !hasProfile && !inCreateAccount) {
      // Logged in but NO profile? Send to Create Account.
      router.replace('/create-account');
    } else if (!session && (inAuthGroup || inCreateAccount)) {
      // Not logged in? Send to Sign In.
      router.replace('/sign-in');
    }
  }, [session, isInitialized, hasProfile, segments]);

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        {/* We just list the screens here, the useEffect handles the protection! */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="create-account"  />
      </Stack>
    </React.Fragment>
  );
}