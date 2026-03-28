import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function createGroup() {

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>Create a Group!</Text>
                <Text>Name</Text>
                <Text>Description(Optional)</Text>
                <Text>Add members</Text>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }

});