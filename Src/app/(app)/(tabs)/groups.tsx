import { useCallback, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { supabase } from "../../../utils/supabase";
import { useAuthStore } from "../../../utils/authStore";

type Group = {
  id: string;
  name: string;
  amountOwed: number;
  amountToPay: number;
};

export default function Groups() {
  const router = useRouter();
  const { session } = useAuthStore();
  
  // 1. Replace the dummy array with State!
  const [groups, setGroups] = useState<Group[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const goToCreateGroup = () => { router.push('/create-group') };

  // 2. The function to fetch your real data
  const fetchGroups = async () => {
    if (!session?.user) return;
    setIsRefreshing(true);

    // Query the group_members table to find where this user belongs, 
    // and grab the associated group info at the same time!
    const { data, error } = await supabase
      .from('group_members')
      .select(`
        group_id,
        groups (
          id,
          name
        )
      `)
      .eq('user_id', session.user.id);

    if (error) {
      console.error("Error fetching groups:", error);
      Alert.alert("Error", "Could not load your groups.");
    } else if (data) {
      // Map the weird database shape into our clean 'Group' type
      const formattedGroups: Group[] = data.map((item: any) => ({
        id: item.groups.id,
        name: item.groups.name,
        amountOwed: 0,  // We'll calculate this later when you add expenses!
        amountToPay: 0  // We'll calculate this later when you add expenses!
      }));
      
      setGroups(formattedGroups);
    }
    
    setIsRefreshing(false);
  };

  // 3. Run fetchGroups every time the user navigates to this tab
  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [session])
  );

  const renderGroupCard = ({ item }: { item: Group }) => {
    return(
      <View style={styles.card}>
        <Text style={styles.groupName}>{item.name}</Text>
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
          {groups.length === 0 && !isRefreshing ? (
             <Text style={styles.emptyText}>You aren't in any groups yet. Create one!</Text>
          ) : (
            <FlatList
              data={groups}
              renderItem={renderGroupCard}
              keyExtractor={(item) => item.id}
              numColumns={2}
              onRefresh={fetchGroups} // Pull-to-refresh!
              refreshing={isRefreshing}
            />
          )}
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
    flex: 1,
    margin: 8,
    padding: 18,
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: 'white',
    aspectRatio: 1,
  },
  groupName: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#555',
  }
});