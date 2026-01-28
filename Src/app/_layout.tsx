import { Stack } from "expo-router"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { Header } from "react-native/Libraries/NewAppScreen"

export default function RootLayout() {
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <Stack>

                <Stack.Protected guard={false}>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack.Protected>

                <Stack.Protected guard={true}>
                    <Stack.Screen name="sign-in" />
                </Stack.Protected>

            </Stack>
        </React.Fragment>
    );
}