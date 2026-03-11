import { Text, View, StyleSheet } from 'react-native';

export default function createGroup() {

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Create a Group!</Text>
            <Text>Name</Text>
            <Text>Description(Optional)</Text>
            <Text>Add members</Text>
        </View>
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