import { Text, View } from 'react-native';
import { Link } from "expo-router"

export default function Index() {
  return (
    <View>
      <Text>Home screen</Text>
      <Link asChild push href="/modal">
        <Button title="Open modal" />
      </Link>
    </View>
  );
}