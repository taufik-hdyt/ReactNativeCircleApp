import { Box, Button, Flex, FormControl, HStack, Input } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SearchPage() {
  return (
    <Box bg="gray.700" h="full" w="full" py={4} px={4}>
      <HStack space={1}>
      <FormControl w="80%">
        <Input size="lg" _focus={{color:"white"}} InputLeftElement={<Box ml={3}><MaterialCommunityIcons  name="account-search-outline" size={24} color="white" /></Box>} placeholder="Search user" />
      </FormControl>
      <Button colorScheme="green">Search</Button>
      </HStack>
    </Box>
  );
}
