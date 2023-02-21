import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import RestaurantItem from "./src/Components/RestaurantItem";
import restaurant from "./assets/data/restaurants.json";
import HomeScreen from "./src/Screens/HomeScreen";
import RestaurantDetailsScreen from "./src/Screens/RestaurantDetailsScreen";
import DishDetailScreen from "./src/Screens/DishDetailScreen";
import BasketScreen from "./src/Screens/BasketScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import OrderDetailScreen from "./src/Screens/OrderDetailsScreen";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailScreen/> */}
      {/* <BasketScreen/> */}
      {/* <OrderScreen/> */}
      <OrderDetailScreen/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
