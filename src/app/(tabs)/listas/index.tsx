import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Card from "@/components/card";
import { styles } from "@/utils/styles"


const ListsScreen = () => {

      
    return (
      <View style={styles.container}>
                <View style={styles.section}>
          <Text style={styles.sectionTitle}>feed de notícias</Text>
          <Card></Card>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>listas recentes</Text>
          <FlatList
            horizontal
            renderItem={({ item }) => <View style={styles.listPlaceholder}><Text style={styles.listText}>{item}</Text></View>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.seeMore}>ver mais</Text>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>sorteio</Text>
          <FlatList
            horizontal
            renderItem={({ item }) => <View style={styles.listPlaceholder}><Text style={styles.listText}>{item}</Text></View>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.seeMore}>ver mais</Text>
        </View>
  
        <TouchableOpacity style={styles.fab}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );


  };

  export default ListsScreen
  
  