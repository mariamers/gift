import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors } from "./tokens";

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerShown: false,
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.primary,
    },
    headerLargeTitleStyle: {
        color: colors.text,
    },
    headerTransparent: true,
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
}