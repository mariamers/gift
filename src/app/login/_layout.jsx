// app/(login)/_layout.tsx
import { Stack } from "expo-router";
import { View } from "react-native";
import { styles } from "@/utils/styles";

export default function LoginLayout() {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: (false)}} />
      </Stack>
    </View>
  );
}
