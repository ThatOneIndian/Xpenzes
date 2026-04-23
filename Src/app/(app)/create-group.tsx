import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../utils/supabase';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../utils/authStore';

export default function CreateGroup() {
    // State to hold the text the user types
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');

    // This function will run when they press the Create button
    const handleCreateGroup = () => {
        console.log("Creating group:", groupName, description);
        // Next step: We will send this data to Supabase here!
    };

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Create a Group!</Text>

                {/* Group Name Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Group Name <Text style={styles.required}>*</Text></Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="e.g., Japan Trip 2026"
                        value={groupName}
                        onChangeText={setGroupName} // Updates state as they type
                    />
                </View>

                {/* Description Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Description (Optional)</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="What is this group for?"
                        value={description}
                        onChangeText={setDescription}
                        multiline={true} // Allows the text box to expand vertically
                    />
                </View>

                {/* Placeholder for Add Members */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Add Members</Text>
                    <TouchableOpacity style={styles.addMemberButton}>
                        <Text style={styles.addMemberText}>+ Add friends to this group</Text>
                    </TouchableOpacity>
                </View>

                {/* Submit Button */}
                <TouchableOpacity 
                    style={[styles.submitButton, !groupName ? styles.submitButtonDisabled : null]} 
                    onPress={handleCreateGroup}
                    disabled={!groupName} // Prevents clicking if the name is empty
                >
                    <Text style={styles.submitButtonText}>Create Group</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff' // Changed to white for a cleaner look
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
        color: '#333'
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#555'
    },
    required: {
        color: 'red',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    addMemberButton: {
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 8,
        borderStyle: 'dashed',
        alignItems: 'center',
    },
    addMemberText: {
        color: '#007AFF',
        fontWeight: '600',
    },
    submitButton: {
        backgroundColor: '#007AFF', // Standard iOS Blue
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 'auto', // Pushes the button to the bottom of the screen
        marginBottom: 20,
    },
    submitButtonDisabled: {
        backgroundColor: '#a0c8ff', // Lighter blue when disabled
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});