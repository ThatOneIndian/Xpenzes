import { useRouter } from "expo-router";
import { View, Text, Button,StyleSheet} from "react-native"

export default function Groups() {
  const router = useRouter();
  const goToCreateGroup = () => { router.push('create-group') };

  const dummyGroups = [
    {id: '1', name:'group 1', amountOwed: 0, amountToPay: 100},
    {id: '2', name:'Japan Trip 2026', amountOwed: 100, amountToPay: 10},
    {id: '3', name:'Roommates', amountOwed: 120, amountToPay: 0}
  ];
  return (
    <View>
      <Text>Groups screen</Text>
      <View style={styles.CreateGroupButton}>
        <Button title="Create Group" onPress={goToCreateGroup} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CreateGroupButton: {
    justifyContent: 'flex-end'
  }
});