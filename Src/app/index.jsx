import { Link } from "expo-router";
import { getRouteConfigSorter } from "expo-router/build/fork/getStateFromPath-forks";
import { StyleSheet, Text, View, Image } from "react-native";

const Home = () => {
    return (
        <View>
            <Text>Welcome to the Home Screen</Text>
            <Link href='/landing'>Hello</Link>
        </View>
    )
}

export default Home;

const style = StyleSheet.create({
    
})