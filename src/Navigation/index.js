import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import RestaurantDetailsScreen from "../Screens/RestaurantDetailsScreen";
import DishDetailScreen from "../Screens/DishDetailScreen";
import OrderScreen from "../Screens/OrderScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
      <Stack.Screen name="DishDetail" component={DishDetailScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
