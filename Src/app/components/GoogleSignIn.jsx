import { Button, StyleSheet } from "react-native";
import { supabase } from "../utils/supabase";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";

// 1. Handle the browser session
WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignIn() {
  const handleLogin = async () => {
    // 2. Create the deep link (works on Expo Go and Production)
    const redirectUrl = makeRedirectUri({
      scheme: 'xpenzes',
      path: 'auth/callback', // optional path
    });

    console.log("Redirecting to:", redirectUrl); // Debugging: check your console!

    // 3. Start the flow
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
        skipBrowserRedirect: true, // We handle the browser manually
      },
    });

    if (error) console.error(error);

    // 4. Open the browser
    if (data?.url) {
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl
      );
      
      // Note: Supabase session is handled automatically by the URL event listener
      // setup in your utils/supabase.js (if you used the persistent setup)
    }
  };

  return <Button title="Sign in with Google" onPress={handleLogin} />;
}