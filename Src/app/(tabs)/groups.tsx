import { useRouter } from "expo-router";
import { View, Text, Button} from "react-native"

export default function groups() {
  const router = useRouter();

  const goToCreateGroup = () => {router.navigate('../create-group.tsx')}

  
  return (
    <View>
      <Text>Groups screen</Text>
      <Button title="Create Group" onPress={goToCreateGroup} />
    </View>
  );
}