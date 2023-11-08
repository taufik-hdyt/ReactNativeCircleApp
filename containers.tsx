import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./src/screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import FollowsPage from "./src/screens/follows/follows";
import ProfilePage from "./src/screens/profile/profile";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchPage from "./src/screens/search/search";


const Tab = createBottomTabNavigator();
export default function Containers() {
  return (
    <NavigationContainer >
      <Tab.Navigator   initialRouteName="Circle" screenOptions={{
        tabBarHideOnKeyboard:true,
      }}>
        <Tab.Screen
          name="Circle"

          component={HomePage}
          options={{
            tabBarActiveTintColor:"black",
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={30} color="green" />
            ),
            headerShown: false
          }}
        />
         <Tab.Screen
          name="Follows"
          component={FollowsPage}
          options={{
            tabBarActiveTintColor:"black",
            tabBarLabel: "Follows",
            tabBarIcon: ({ color }) => (
              <Feather name="users" size={24} color="green" />
            ),
          }}
        />
                    <Tab.Screen
          name="Search"
          component={SearchPage}
          options={{
            tabBarActiveTintColor:"black",
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-search-outline" size={28} color="green" />
            ),
          }}
        />
         <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarActiveTintColor:"black",
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color="green" />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
