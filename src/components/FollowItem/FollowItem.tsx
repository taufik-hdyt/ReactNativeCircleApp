import { Avatar, Button, Flex, HStack, Stack, Text } from 'native-base'
import React from 'react'

export default function FollowItem() {
  return (
    <Flex justify="space-between" direction='row'>
      <HStack space={2}>
      <Avatar />
      <Stack>
        <Text  color="white" fontSize="lg">Taufik H</Text>
        <Text color="gray.400">@taufik</Text>
      </Stack>
      </HStack>
      <Button colorScheme="green" variant="outline" color="white" rounded="full">Follow</Button>
    </Flex>
  )
}
