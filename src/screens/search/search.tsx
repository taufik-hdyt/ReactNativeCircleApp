import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Stack,
} from "native-base";
import React,{useState,useEffect} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FollowItem from "../../components/FollowItem/FollowItem";
import axios from "axios";
import {  useSearchAction } from "./search.action";

export default function SearchPage() {

  const {data} = useSearchAction("")

  return (
    <Box bg="gray.700" h="full" w="full" py={4} px={4}>
      <HStack space={1}>
        <FormControl w="80%">
          <Input
            size="lg"
            _focus={{ color: "white" }}
            InputLeftElement={
              <Box ml={3}>
                <MaterialCommunityIcons
                  name="account-search-outline"
                  size={24}
                  color="white"
                />
              </Box>
            }
            placeholder="Search user"
          />
        </FormControl>
        <Button colorScheme="green">Search</Button>
      </HStack>

      <Stack mt={3} space={3} >
        {
          data?.map((e)=>(
            <FollowItem profile_picture={e.profile_picture} fullname={e.fullname} username={e.username}  key={e.id} />
          ))
        }
      </Stack>
    </Box>
  );
}
