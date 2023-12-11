import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  StatusBar,
  Text,
} from "native-base";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import ThreadItem from "../../components/Thread/ThreadItem";
import { SafeAreaView } from "react-native";

export default function ProfilePage() {
  return (
    <SafeAreaView>
      <Box h="full" bg="gray.700" mt={10}>
        <Flex direction="row" px={4} justify="space-between" mt={4}>
          <Box p={1} bg="green.500" rounded="full">
            <Avatar size="xl" />
          </Box>
          <HStack space={6} my="auto">
            <Stack>
              <Text textAlign="center" color="white" fontWeight="bold">
                12
              </Text>
              <Text textAlign="center" color="white" fontWeight="semibold">
                Post
              </Text>
            </Stack>
            <Stack>
              <Text textAlign="center" color="white" fontWeight="bold">
                1.5M
              </Text>
              <Text textAlign="center" color="white" fontWeight="semibold">
                Followers
              </Text>
            </Stack>
            <Stack>
              <Text textAlign="center" color="white" fontWeight="bold">
                10
              </Text>
              <Text textAlign="center" color="white" fontWeight="semibold">
                Following
              </Text>
            </Stack>
          </HStack>
        </Flex>
        <Stack ml={6} mt={2}>
          <Heading color="white">Taufik H</Heading>
          {/* <Text color="gray.400">@taufikhdyt</Text> */}
          <Text color="gray.400">Welcome to my profile</Text>
        </Stack>

        <Box mx="auto" mt={4}>
          <HStack space={3}>
            <Entypo name="images" size={24} color="white" />
            <Text color="white">Threads</Text>
          </HStack>
        </Box>
        <Box
          mx="auto"
          borderBottomColor="grey"
          borderBottomStyle="dashed"
          borderBottomWidth="2px"
          pb={3}
          w="full"
        ></Box>

        <Stack mt={4} px={4}>
          <ThreadItem
            isLine
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo tenetur repudiandae laboriosam, recusandae provident vel! Impedit, nam laborum, soluta ratione totam unde numquam sequi nisi dolore, consequatur ipsum fuga."
          />
        </Stack>
      </Box>
    </SafeAreaView>
  );
}
