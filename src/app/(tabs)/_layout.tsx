import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { RoutGuard } from "@/app/_layout";

export default function TabLayout() {
    return (
        <RoutGuard>
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#007AFF",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShadowVisible : false,
                    headerShown: false,
                    title: "Home",
                    tabBarActiveTintColor: "red",
                    tabBarIcon: ({}) => (
                        <Feather  name="home" size={24} color="black" />

                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    headerShown: false,
                    title: "Explore",
                    tabBarIcon: ({ }) => (
                        <Feather name="home" size={24} color="black" />

                    ),
                }}
            />
        </Tabs>
        </RoutGuard>
    );
}
