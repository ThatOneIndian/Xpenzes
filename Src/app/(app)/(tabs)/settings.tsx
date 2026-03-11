import { View, Text, Button } from "react-native"
import { useAuthStore } from "../../utils/authStore";

export default function SettingsScreen() {
    const { signOut } = useAuthStore();
    return (
        <View>
            <Text>Settings Screen</Text>

            <Button title="Sign out" onPress={signOut} />
        </View>
    );
}