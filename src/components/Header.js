import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const MenuItem = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      <Flex align="center">
        {/* Link the logo to the homepage */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="logo.png" 
            height={10} 
            alt="Buzzcut Logo" 
            mr={2} // Add some space between logo and text
          />
          <Text fontSize="xl" fontWeight="bold" color="white">Buzzcut</Text>
        </Link>
      </Flex>

    </Flex>
  );
};

export default Header;
