import { Flex, Text, VStack, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';  // Using RouterLink for internal navigation
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

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
        {/* Social Media Buttons */}
        <Flex justify="center" mt={4}>
          <IconButton
            as="a"
            href="https://www.linkedin.com/company/aphrx"
            target="_blank"
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            variant="ghost"
            _hover={{
              transform: "scale(1.1)",  // Optional: scale the icon slightly
            }}
            _active={{
              transform: "scale(1.2)"
            }}
            mr={2}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/buzzcut.io"
            target="_blank"
            icon={<FaInstagram />}
            aria-label="Instagram"
            variant="ghost"
            _hover={{
              transform: "scale(1.1)",  // Optional: scale the icon slightly
            }}
            _active={{
              transform: "scale(1.2)"
            }}
          />
        </Flex>
        
        <Text fontSize="xs" align="center" mb={4}>
          © 2025 Aphrx Inc. All Rights Reserved.
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
