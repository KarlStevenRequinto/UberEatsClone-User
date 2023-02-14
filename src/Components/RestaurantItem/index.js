import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    marginBottom: 5,
  },
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    borderRadius: 20,
    width: 30,
    height: 30,
  },
});
