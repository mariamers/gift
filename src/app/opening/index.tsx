import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import { useFonts } from 'expo-font';

export default function Opening() {
    const [fontsLoaded] = useFonts({
        Aleo: require("../../../assets/fonts/Aleo.ttf"),
      });
      if (!fontsLoaded) {
        return null; // or a loading screen
      }
      
    return (
    <View style={styles.container}>
      <Text style={styles.logo}>gift</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232020",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 24,
  },
  logo: {
    color: '#D9D9D9', 
    fontSize: 96, 
    fontFamily: 'Aleo', 
    fontWeight: '400', 
    lineHeight: 96, 
    width: 83,
    wordWrap: 'break-word',
    paddingTop: 12,
  },
});
