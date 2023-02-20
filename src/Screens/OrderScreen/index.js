import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderListItem from "../../Components/OrderListItem";
import orders from "../../../assets/data/orders.json";
const OrderScreen = () => {
  return (
    <View style={{flex:1,width:"100%",paddingTop: 50}}>
      <FlatList data={orders} renderItem={({item})=><OrderListItem order={item}/>}/>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
