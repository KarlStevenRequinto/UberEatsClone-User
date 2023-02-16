import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../Components/DishListItem";
const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const Header = () => {
    return (
      <View style={styles.page}>
        <Image source={{ uri: restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>

          <Text style={styles.menuTitle}>Menu</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.page}>
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  page: { flex: 1 },
  image: { width: "100%", aspectRatio: 5 / 3 },
  title: { fontSize: 35, fontWeight: "600", marginVertical: 10 },
  subtitle: { color: "grey", fontSize: 15 },
  maring: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  menuTitle: {
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});
