import { Pressable, StyleSheet, Text, View } from "react-native";
import restaurant from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const dish = restaurant[0].dishes[0];

const DishDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const onAdd = () => {
    setQuantity(quantity + 1);
  };
  const onMinus = () => {
    setQuantity(quantity - 1);
  };

  const getTotalPrice = () => {
    return (quantity * dish.price).toFixed(2);
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.iconContainer}>
        <Pressable onPress={onMinus}>
          <AntDesign name="minuscircleo" size={60} color="black" />
        </Pressable>
        <Text style={styles.quantity}>{quantity}</Text>
        <Pressable onPress={onAdd}>
          <AntDesign name="pluscircleo" size={60} color="black" />
        </Pressable>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Basket")}
      >
        <Text style={styles.buttonText}>
          Add {quantity} to basket $({getTotalPrice()})
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailScreen;

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
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
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
});
