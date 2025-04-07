import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function Opening() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Aleo: require("../../assets/fonts/Aleo.ttf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login"); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>gift</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232020",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    color: "#D9D9D9",
    fontSize: 96,
    fontFamily: "Aleo",
    fontWeight: "400",
    lineHeight: 96,
    width: 83,
    textAlign: "center",
    paddingTop: 12,
  },
});
