import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Card from "@/components/card";
import { styles } from "@/utils/styles";

const HomeScreen = () => {
  // Simulação de dados para listas e sorteios
  const listasRecentes = ["Lista 1", "Lista 2", "Lista 3"];
  const sorteios = ["Sorteio 1", "Sorteio 2", "Sorteio 3"];

  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>feed de notícias</Text>
        <Card />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>listas recentes</Text>
        <FlatList
          data={listasRecentes} 
          horizontal
          renderItem={({ item }) => (
            <View style={styles.listPlaceholder}>
              <Text style={styles.listText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.seeMore}>ver mais</Text>
      </View>

      {/* Sorteio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>sorteio</Text>
        <FlatList
          data={sorteios}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.listPlaceholder}>
              <Text style={styles.listText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.seeMore}>ver mais</Text>
      </View>

      <TouchableOpacity style={styles.fab} onPress={() => console.log("Botão pressionado")}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>


    </View>
  );
};

export default HomeScreen;
