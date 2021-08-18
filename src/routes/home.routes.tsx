import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import BookStack from "./books.routes";
import colors from "../styles/Colors";
import { Perfil } from "../pages";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.pink,
        inactiveBackgroundColor: colors.pink,
        activeTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Home"
        component={BookStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <FontAwesome5 name="book" size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}