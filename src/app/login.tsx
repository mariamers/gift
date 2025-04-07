import React from "react";
import { router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import { Button } from "@/components/button"; 
import { Input } from "@/components/input";
import { useFonts } from 'expo-font';

export default function Index() {
    const [fontsLoaded] = useFonts({
        Aleo: require("../../assets/fonts/Aleo.ttf"),
        Roboto: require("../../assets/fonts/Roboto.ttf"),
      });
      if (!fontsLoaded) {
        return null; // or a loading screen
      }
      
    return (
    <View style={styles.container}>
      <Text style={styles.logo}>gift</Text>
      
      <Input title="seu usuário"/>
      <Input title="sua senha"/>
      <Text style={styles.forgotPassword}>esqueceu sua senha?</Text>
      
        <Button title="entrar" onPress={() => router.push('/(tabs)/(home)')}/>
      <Text style={styles.registerText}>
        ainda não tem conta? <Text style={styles.registerLink}>cadastre-se</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1919",
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
  
  forgotPassword: {
    color: "#aaa",
    marginBottom: 20,
    alignSelf: 'flex-end'
  },

  registerText: {
    color: "#aaa",
    marginTop: 20,
  },
  registerLink: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});
