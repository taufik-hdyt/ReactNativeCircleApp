import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  ScrollView,
  Stack,
} from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ThreadItem from "../../components/Thread/ThreadItem";
import { IThreads } from "../../interface/threads";
import { useThreadActions } from "./home.action";
import { SafeAreaView } from "react-native";

export default function HomePage() {
  const { data } = useThreadActions();
  return (
    <SafeAreaView>
      <Box bg="gray.700" h="full" w="full">
        <Flex
          justify="space-between"
          direction="row"
          align="center"
          mt={4}
          px={3}
          letterSpacing={3}
        >
          <Avatar
            bg="teal.300"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
          <FormControl w="180px">
            <Input
              borderRadius="lg"
              size="lg"
              _focus={{ color: "white" }}
              placeholder="Kata kata hari ini?"
            />
          </FormControl>
          <MaterialCommunityIcons name="image-plus" size={24} color="green" />
          <Button colorScheme="green" borderRadius="lg">
            Post
          </Button>
        </Flex>

        <Divider mt={4} color="gray.400" />

        <ScrollView>
          <Stack px={3} space={3} mt={6}>
            {data?.map((e: IThreads, idx: number) => (
              <ThreadItem
                replies={e.replies}
                likes={e.likes}
                key={idx}
                content={e.content}
                image={e.image}
                user={e.user}
              />
            ))}
          </Stack>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}
