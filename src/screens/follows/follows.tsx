import { Box, Button, Flex, Stack } from "native-base";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  FollowersPage,
  FollowingsPage,
} from "../../components/Follows/Follows";

const Tab = createMaterialTopTabNavigator();

export default function FollowsPage() {
  return (
    <Tab.Navigator  initialRouteName="Followers">
      <Tab.Screen  name="Followers" component={FollowersPage} />
      <Tab.Screen name="Following" component={FollowingsPage} />
    </Tab.Navigator>
  );
}
