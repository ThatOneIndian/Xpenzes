import { Stack } from "expo-router"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { Header } from "react-native/Libraries/NewAppScreen"
import { useAuthStore } from "../utils/authStore";

export default function RootLayout() {
    const { isLoggedIn, shouldCreateAccount } = useAuthStore();
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <Stack>

                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="modal" options={{ presentation: "modal" }}/>
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