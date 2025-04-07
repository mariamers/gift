import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import { styles } from "@/utils/styles"


export default function Header() {
  const [fontsLoaded] = useFonts({
            Aleo: require("../../assets/fonts/Aleo.ttf"),
            Roboto: require("../../assets/fonts/Roboto.ttf"),
          });
          if (!fontsLoaded) {
            return null; // or a loading screen
          }

  return (
    <View style={styles.header}>
      <Ionicons name="person-circle-outline" size={24} color="white" />
      <Text style={styles.title}>gift</Text>
      <Ionicons name="ellipsis-vertical" size={24} color="white" />
    </View>
  );
}

