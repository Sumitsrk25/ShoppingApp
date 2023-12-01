import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MyProducts from "./screen/MyProducts";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyProducts"
          component={MyProducts}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
