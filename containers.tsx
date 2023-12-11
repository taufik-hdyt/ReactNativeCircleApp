import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "./src/screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FollowsPage from "./src/screens/follows/follows";
import ProfilePage from "./src/screens/profile/profile";
import SearchPage from "./src/screens/search/search";

const Tab = createBottomTabNavigator();
function TabGroups() {
  return (
    <Tab.Navigator
      initialRouteName="Circle"
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Circle") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Follows") {
            iconName = iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Search") {
            iconName = iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Profile") {
            iconName = iconName = focused
              ? "md-person-sharp"
              : "md-person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Circle" component={HomePage} />
      {/* <Tab.Screen name="Follows" component={FollowsPage} /> */}
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default function Containers() {
  return (
    <NavigationContainer>
      <TabGroups />
    </NavigationContainer>
  );
}
