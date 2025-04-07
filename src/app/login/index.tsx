import React from "react";
import { router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import { Button } from "@/components/button"; 
import { Input } from "@/components/input";
import { useFonts } from 'expo-font';
import { styles } from '@/utils/styles';

export default function Index() {
    const [fontsLoaded] = useFonts({
        Aleo: require("../../../assets/fonts/Aleo.ttf"),
        Roboto: require("../../../assets/fonts/Roboto.ttf"),
      });
      if (!fontsLoaded) {
        return null; 
      }
      
    return (
<View style={[styles.container, styles.center]}>
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
