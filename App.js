import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import RestaurantItem from "./src/Components/RestaurantItem";
import restaurant from "./assets/data/restaurants.json";
import HomeScreen from "./src/Screens/HomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
