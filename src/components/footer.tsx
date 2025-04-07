import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { styles } from "@/utils/styles"


export default function Footer() {
    const [selectedTab, setSelectedTab] = useState("home");

  return (
    <View style={styles.containerFooter}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setSelectedTab("busca")}
      >
        <Icon
          name="search"
          size={24}
          color={selectedTab === "busca" ? "#fff" : "#aaa"}
        />
        <Text style={styles.label}>busca</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setSelectedTab("home")}
      >
        <Icon
          name="home-outline"
          size={24}
          color={selectedTab === "home" ? "#fff" : "#aaa"}
        />
        <Text style={styles.label}>home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setSelectedTab("listas")}
      >
        <Icon
          name="list"
          size={24}
          color={selectedTab === "listas" ? "#fff" : "#aaa"}
        />
        <Text style={styles.label}>listas</Text>
      </TouchableOpacity>
    </View>
  );
};

