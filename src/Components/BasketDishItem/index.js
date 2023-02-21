import { View, Text, StyleSheet } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.qtyContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>{basketDish.price}</Text>
    </View>
  );
};

export default BasketDishItem;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    marginVertical: 15,
  },

  qtyContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 8,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
});
