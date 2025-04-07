import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "@/components/card";
import { styles } from "@/utils/styles"


const LoginScreen = () => {

    return (
      <View style={styles.container}>
        
        {/* Feed de Notícias */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>feed de notícias</Text>
          <Card></Card>
        </View>
  
        {/* Listas Recentes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>listas recentes</Text>
          <FlatList
            horizontal
            renderItem={({ item }) => <View style={styles.listPlaceholder}><Text style={styles.listText}>{item}</Text></View>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.seeMore}>ver mais</Text>
        </View>
  
        {/* Sorteio */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>sorteio</Text>
          <FlatList
            horizontal
            renderItem={({ item }) => <View style={styles.listPlaceholder}><Text style={styles.listText}>{item}</Text></View>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.seeMore}>ver mais</Text>
        </View>
  
        {/* Botão de + */}
        <TouchableOpacity style={styles.fab}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );


  };

  export default LoginScreen
  
  