import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ILike, IReplies, IUser } from "../../interface/threads";

interface IProps{
  content?: string;
  createdAt?: string;
  id?: number;
  image?: string;
  updateAt?: string;
  user?: IUser
  likes?: ILike[]
  replies?: IReplies[]
  isLine?: boolean
}

// export interface IThreads {
//   content: string;
//   createdAt: string;
//   id: number;
//   image: string;
//   updateAt: string;
//   user: IUser
//   likes: ILike[]
//   replies: IReplies[]
// }

export default function ThreadItem({content,createdAt,id,image,likes,replies,updateAt,user,isLine}:IProps) {
  return (
    <Box>
      <HStack space="2">
        <Avatar source={{uri: user?.profile_picture}} size="md" />
        <Box w="83%">
          <HStack space={1}>
            <Text fontWeight="semibold" color="white">
              {user?.fullname}
            </Text>
            <Text color="gray.400" fontSize="xs">
              @{user?.username}
            </Text>
          </HStack>
          <Text color="white">
            {content}
          </Text>
          {
            image &&           <Image
            mt={3}
            src={image}
            alt={content}
            size="2xl"
          />
          }


          <HStack mt={3} space={4}>
            <HStack space={3}>
            <AntDesign name="hearto" size={24} color="white" />
            <Text color='white'>{likes?.length}</Text>
            </HStack>
            {/* <AntDesign name="heart" size={24} color="white" /> */}
            <HStack space={3}>
            <FontAwesome5 name="comment" size={24} color="white" />
            <Text color='white'>{replies?.length}</Text>
            </HStack>
          </HStack>
        </Box>
      </HStack>
      {
        !isLine && <Divider mt={4} color="gray.200" />
      }
    </Box>
  );
}
