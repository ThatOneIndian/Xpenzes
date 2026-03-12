import { useRouter } from 'expo-router';
import { Text, View, Button } from 'react-native';

export default function Home() {

  const router = useRouter();
  const goToAddFriend = () => { router.push('AddFriend') };

  return (
    <View>
      <Text>Home screen</Text>
      <Button title="add friend" onPress={goToAddFriend} />
      
    </View>
  );
}