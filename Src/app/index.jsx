import { Link } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { supabase } from '../utils/supabase';


const Home = () => {
    return (
        <View>
            <Text>Welcome to the Home Screen</Text>
            <Link href='/landing'>Go to Landing</Link>
        </View>
    )
}

export default Home;

const style = StyleSheet.create({
    
})