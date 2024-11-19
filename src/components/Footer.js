import {
  Flex,
  Text,
  Link, 
  Image
} from '@chakra-ui/react';
import Logo from './Logo';

export default function Footer() {
  return (
    <Flex
      as="nav"
      align="center"
      // justify="space-between"
      // wrap="wrap"
      // w="100%"
      // mt={{ base: 4, md: 10 }}
      m={{ base: 5 }}
      p={0}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
    >
      {/* <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="https://play-lh.googleusercontent.com/kFywh_j9lSOyUD1iuO5zK-q6R_eRFARBRW0yVcyFLPrrNDH28FPKksF-clN0vXfysy8n" 
            height={5} 
            alt="Buzzcut Logo" 
            mr={2} // Add some space between logo and text
          />
          <Text fontSize="l" fontWeight="bold" color="white">Buzzcut</Text>
        </Link> */}
      <Text fontSize="xs" align={"center"} >© 2024 Aphrx Inc. All Rights Reserved.</Text>
    </Flex>
  );
}