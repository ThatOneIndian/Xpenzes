import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function TabsLayout() {
    return (
<Tabs 
            screenOptions={{
                tabBarActiveTintColor: 'black', // Makes the active text and icon black
                tabBarInactiveTintColor: 'gray', // Makes the unselected tabs gray
            }}
        >
            {/* HOME TAB */}
            <Tabs.Screen 
                name="Home" 
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />

            {/* GROUPS TAB */}
            <Tabs.Screen 
                name="Groups" 
                options={{ 
                    title: "Groups",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="groups" size={size} color={color} />
                    )
                }}
            />

            {/* SETTINGS TAB */}
            <Tabs.Screen 
                name="Settings" 
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}