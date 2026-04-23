import { useRouter } from "expo-router";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function Groups() {
  const router = useRouter();
  const goToCreateGroup = () => { router.push('create-group') };

  type Group = {
    id: string;
    name: string;
    amountOwed: number;
    amountToPay: number;
  };

  const dummyGroups = [
    {id: '1', name:'group 1', amountOwed: 0, amountToPay: 100},
    {id: '2', name:'Japan Trip 2026', amountOwed: 100, amountToPay: 10},
    {id: '3', name:'Roommates', amountOwed: 120, amountToPay: 0},
    {id: '4', name:'Dinner', amountOwed: 20, amountToPay:0},
    {id: '5', name:'Gambling', amountOwed: 20, amountToPay:0},
    {id: '6', name:'Costco', amountOwed: 20, amountToPay:0},
    {id: '7', name:'Rent', amountOwed: 20, amountToPay:0},
    {id: '8', name:'Misc.', amountOwed: 20, amountToPay:0},
    {id: '9', name:'Emergency', amountOwed: 20, amountToPay:0},
  ];

  const renderGroupCard = ({ item }: { item: Group }) => {
    return(
      <View  style={styles.card}>
        <Text>{item.name}</Text>
        <Text>Amount Owed: ${item.amountOwed}</Text>
        <Text>Amount To Pay: ${item.amountToPay}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Groups</Text>

          <TouchableOpacity onPress={goToCreateGroup}>
            <AntDesign name="addusergroup" size={28} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.FlatList}>
          <FlatList
            data={dummyGroups}
            renderItem={renderGroupCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView:{
    backgroundColor: '#87CEEB',
    flex: 1
  },

  container: {
    alignContent: "center",
    flex: 1,
    paddingHorizontal:16,
  },

  headerContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical:10,
    marginBottom: 10,

  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  FlatList: {
    flex: 1,
  },
  card: {
    flex:1,
    margin: 8,
    padding: 18,
    borderWidth: 2,
    borderCurve: "circular",
    borderRadius: 12,
  }
});