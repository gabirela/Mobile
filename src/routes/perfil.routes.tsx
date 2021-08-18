import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Books } from "../pages";

const Stack = createStackNavigator();

export default function PerfilRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Books" component={Books} />
    </Stack.Navigator>
  );
}