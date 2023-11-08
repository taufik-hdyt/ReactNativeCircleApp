import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  ScrollView,
  Stack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ThreadItem from "../../components/Thread/ThreadItem";
import axios from "axios";
import { IThreads, IUser } from "../../interface/threads";

export default function HomePage() {
  const [data,setData] = useState([])



  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get('http://192.168.18.147:5000/api/v1/threads')
      setData(response.data.data)
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  useEffect(()=>{
    fetchDataFromAPI()
  },[])

  return (
    <Box bg="gray.700" mt={10} h="full" w="full">
      <Flex pb={3}
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

      <ScrollView>
        <Stack px={3} space={3} mt={8}>
          {
            data?.map((e: IThreads,idx:number)=> (
              <ThreadItem replies={e.replies} likes={e.likes} key={idx} content={e.content} image={e.image} user={e.user} />
            ))
          }
        </Stack>
      </ScrollView>
    </Box>
  );
}
