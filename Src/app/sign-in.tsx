import { Link } from "expo-router";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native"
import { useAuthStore } from '../utils/authStore';

export default function SignInScreen() {
  const { logIn } = useAuthStore();
  return (
    <View>
      <Text>
        Sign In Screen
      </Text>
      <Button title="Sign in" onPress={logIn} />
      <Link asChild push href="/modal">
        <Button title="Open modal (disabled)" />
      </Link>
    </View>
  );
}