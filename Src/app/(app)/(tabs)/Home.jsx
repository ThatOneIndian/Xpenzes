import { Text, View, Button } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home screen</Text>
      <Button title="add friend" onPress={goToCreateGroup} />
    </View>
  );
}