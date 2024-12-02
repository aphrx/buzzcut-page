import { Flex, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';  // Using RouterLink for internal navigation

export default function Footer() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"  // Center the footer content
      direction={{ base: "column", sm: "row" }}  // Stack links on mobile, side-by-side on larger screens
      m={{ base: 5 }}
      p={0}
    >
      <VStack>
      <Text fontSize="xs" align="center" mb={4}> 
        © 2024 Aphrx Inc. All Rights Reserved.
      </Text>

      {/* Add the Privacy Policy and Terms of Service links */}
      
      <Flex justify="center" spacing={4}>
        <Text fontSize="xs" color="blue.500" mr={4}>
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
        </Text>
        <Text fontSize="xs" color="blue.500">
          <RouterLink to="/terms">Terms of Service</RouterLink>
        </Text>
      </Flex>
      </VStack>
    </Flex>
  );
}
