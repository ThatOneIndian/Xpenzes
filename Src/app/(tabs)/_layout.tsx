import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
    <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="groups" />
        <Tabs.Screen name="settings" />
    </Tabs>
    );
}