import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      {/* 1. Make the tabs the default view and hide the stack header */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* 2. Register your create-group screen so it slides over the tabs */}
      <Stack.Screen 
        name="create-group" 
        options={{ 
          title: 'Create Group',
          presentation: 'modal' // makes it slide up from the bottom
        }} 
      />

      {/* 3. Register the dynamic group details screen */}
      <Stack.Screen 
        name="group/[id]" 
        options={{ 
          title: 'Group Details',
          headerShown: true, // We want the default back button here!
          headerBackTitle: 'Back' 
        }} 
      />

      <Stack.Screen 
        name="AddFriend" 
        options={{ 
          title: 'Add Friend',
          presentation: 'modal' // makes it slide up from the bottom
        }} 
      />

    </Stack>
  );
}