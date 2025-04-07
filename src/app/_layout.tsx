import { colors } from "@/utils/tokens";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
    return (
        <SafeAreaProvider>
            <RootNavigation />
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
};

const RootNavigation = () => {
    return ( 
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: true, headerTitle: "gift", headerTitleAlign: 'center', headerStyle: {
          backgroundColor: (colors.dark) }, headerTintColor: (colors.text)}} />
             <Stack.Screen name="index" options={{ headerShown: false}} />   
             <Stack.Screen name="login" options={{ headerShown: false}} />         
        </Stack>
    );
};

export default App;
