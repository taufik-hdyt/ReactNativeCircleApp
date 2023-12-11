import { Avatar, Button, Flex, HStack, Stack, Text } from "native-base";
import React from "react";

interface Props {
  fullname?: string;
  username?: string;
  profile_picture?: string;
}
export default function FollowItem({
  fullname,
  profile_picture,
  username,
}: Props) {
  return (
    <Flex justify="space-between" direction="row">
      <HStack space={2}>
        <Avatar source={{ uri: profile_picture }} />
        <Stack>
          <Text color="white" fontSize="lg">
            {fullname}
          </Text>
          <Text color="gray.400">@{username}</Text>
        </Stack>
      </HStack>
      <Button  variant="ghost">
        <Text bg="green.400" px={3} rounded="lg" py={1} color="white" fontWeight="bold">Follow</Text>
      </Button>
    </Flex>
  );
}
