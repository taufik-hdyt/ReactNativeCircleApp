import { Box, Stack } from "native-base";
import React from "react";
import FollowItem from "../FollowItem/FollowItem";
import { SafeAreaView } from "react-native-safe-area-context";

export function FollowersPage() {
  return (

    <Box bg="gray.700" h="full">
      <Stack p={4}>
        <FollowItem fullname="Taufik H" username="taufik" />
      </Stack>
    </Box>

  );
}

export function FollowingsPage() {
  return (
    <Box bg="gray.700" h="full">
      <Stack p={4}>
        <FollowItem fullname="Taufik H" username="taufik" />
      </Stack>
    </Box>
  );
}
