import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import restaurant from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import BasketDishItem from "../../Components/BasketDishItem";

const resto = restaurant[0];
const BasketScreen = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{resto.name}</Text>
      <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
        Your Items
      </Text>
      <FlatList
        data={resto.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.separator} />

      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Create Order</Text>
      </Pressable>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    backgroundColor: "lightgray",
    height: 1,
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  qtyContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 8,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
});
