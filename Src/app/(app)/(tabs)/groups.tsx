import { useRouter } from "expo-router";
import { View, Text, Button,StyleSheet} from "react-native"

export default function groups() {
  const router = useRouter();

  const goToCreateGroup = () => { router.push('/create-group') };

  return (
    <View>
      <Text>Groups screen</Text>
      <Button title="Create Group" onPress={goToCreateGroup} />
    </View>
  );
}

const styles = StyleSheet.create({

});