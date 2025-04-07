import { View, Text, StyleSheet } from "react-native";
import { styles } from "@/utils/styles"

export default function Card() {
  return (
          <View style={styles.feedItem}>
            <View style={styles.feedImagePlaceholder} />
            <View>
              <Text style={styles.feedText}>joão adicionou um novo item</Text>
              <Text style={styles.feedSubtext}>lorem ipsum</Text>
            </View>
            <Text style={styles.seeMore}>ver mais</Text>
          </View>
            )
};
