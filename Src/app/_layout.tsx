import { Stack } from "expo-router"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { Header } from "react-native/Libraries/NewAppScreen"

const isLoggedIn = false;
const shouldCreateAccount = false;

export default function RootLayout() {
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <Stack>

                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack.Protected>

                <Stack.Protected guard={!isLoggedIn && !shouldCreateAccount}>
                    <Stack.Screen name="sign-in" />
                </Stack.Protected>

                <Stack.Protected guard={shouldCreateAccount}>
                    <Stack.Screen name="create-account" />
                </Stack.Protected>

            </Stack>
        </React.Fragment>
    );
}