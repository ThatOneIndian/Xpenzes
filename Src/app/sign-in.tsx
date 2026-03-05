import { Link } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";
import GoogleSignIn from "./components/GoogleSignIn"; 

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Xpenzes</Text>
      
      {/* 2. Render the Google auth button here */}
      <GoogleSignIn />

      <Link asChild push href="/modal">
        <Button title="Open modal (disabled)" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});