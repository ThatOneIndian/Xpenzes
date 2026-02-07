import { View, Text, Button } from "react-native"
import { useAuthStore } from "../../utils/authStore";

export default function SettingsScreen() {
    const { logOut } = useAuthStore();
    return (
        <View>
            <Text>Settings Screen</Text>

            <Button title="Sign out" onPress={logOut} />
        </View>
    );
}