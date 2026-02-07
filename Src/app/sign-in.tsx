import { Link } from "expo-router";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native"

export default function SignInScreen() {
  return (
    <View>
      <Text>
        Sign In Screen
      </Text>
      <Link asChild push href="/modal">
        <Button title="Open modal" />
      </Link>
    </View>
  );
}