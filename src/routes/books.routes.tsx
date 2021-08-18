import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Books, Perfil } from "../pages";

const Stack = createStackNavigator();

export default function BookRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}