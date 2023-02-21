import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import OrderListItem from "../../Components/OrderListItem";
import BasketDishItem from "../../Components/BasketDishItem";
const order = orders[0];
const resto = restaurants[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} • 2 days ago</Text>

          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetailScreen = () => {
  return (
    <FlatList
      data={resto.dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      ListHeaderComponent={OrderDetailsHeader}
    />
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  page: { flex: 1 },
  image: { width: "100%", aspectRatio: 5 / 3 },
  title: { fontSize: 35, fontWeight: "600", marginVertical: 10 },
  subtitle: { color: "grey", fontSize: 15 },
  menuTitle: {
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});
