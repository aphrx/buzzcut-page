import {
  Flex,
  Text,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex
      as="nav"
      align="center"
      m={{ base: 5 }}
      p={0}
    >
     
      <Text fontSize="xs" align={"center"} >© 2024 Aphrx Inc. All Rights Reserved.</Text>
    </Flex>
  );
}