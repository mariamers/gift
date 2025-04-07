import { colors, fontSize } from "@/utils/tokens"
import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons";

const TabsNavigation = () => {
    return (
        <Tabs screenOptions={
            {
                tabBarActiveTintColor: colors.secondary,
                tabBarLabelStyle: { fontSize: fontSize.xs },
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.primary }

            }
        }
        >
            <Tabs.Screen
                name="perfil"
                options={{
                    title: "Conta",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-circle-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="(home)" 
            options={{
                title: "Início",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={24} color={color} />
                ),
            }}/>
            <Tabs.Screen name="listas" options={{
                title: "Listas",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="list" size={24} color={color} />
                ),
            }}/>
        </Tabs>
    )
}


export default TabsNavigation