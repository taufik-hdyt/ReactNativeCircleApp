import { useRoute } from "@react-navigation/native";
import { StatusBar, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThreadDetailScreen() {
  const route = useRoute();
  const { params } = route;
  return (
    <SafeAreaView>
      <Text>Reply</Text>
    </SafeAreaView>
  );
}
