import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* You don't even need to list the screens here unless you want specific headers! */}
      {/* The Stack automatically picks up sign-in, create-account, etc. */}
    </Stack>
  );
}