import { FlatList, StyleSheet } from "react-native";
import RestaurantItem from "../../Components/RestaurantItem";
import restaurant from "../../../assets/data/restaurants.json"
export default function HomeScreen() {
  return (
    <FlatList
      data={restaurant}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
