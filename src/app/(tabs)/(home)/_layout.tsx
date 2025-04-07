import { StackScreenWithSearchBar } from "@/utils/_layout"
import { styles } from "@/utils/styles"
import { Stack } from "expo-router"
import { View } from "react-native"


 const HomeLayout = ( ) => {
return (
    <View style={styles.container}>
    <Stack>
    <Stack.Screen name='index' options={{
        ...StackScreenWithSearchBar,
        headerTitle:"Home",}}/>
    </Stack></View>
)
}

export default HomeLayout