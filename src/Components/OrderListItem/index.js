import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 100, height: 100, marginRight: 5 }}
      />
      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 items $38.45</Text>
        <Text>2 days ago • {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});
