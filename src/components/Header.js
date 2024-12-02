import { HashLink as Link } from "react-router-hash-link"; // Import the HashLink component
import { Box, VStack, Button, Flex, Text, Image, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, DrawerCloseButton } from "@chakra-ui/react";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = (props) => {
  const { children, isLast, to, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      {/* Correctly pass `to` prop for HashLink */}
      <Link smooth to={to}>
        {children}
      </Link>
    </Text>
  );
};

const MobileMenuItem = (props) => {
  const { children, isLast, to, ...rest } = props;
  return (
      <Link smooth to={to} style={{ width: "100%" }}>
        <Button w="100%" bg={"#140d37"} smooth to={to}>
          {children}
        </Button>
      </Link>
  );
};

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Flex align="center" justify="space-between" w="100%">
        {/* Logo with the menu inline */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo.png"
            height={10}
            alt="Buzzcut Logo"
            mr={2}
          />
          <Text fontSize="xl" fontWeight="bold" color="white">Buzzcut</Text>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          aria-label="Open menu"
          icon={<FontAwesomeIcon icon={faBars} />}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          _hover={{
            bg: '#2c254b', // Hover state color
            color: 'white',
          }}
          _active={{
            bg: '#2c254b', // Hover state color
            color: 'white',
          }}
          bg={"transparent"}
          size="lg"
          ml={4}
        />

        {/* Desktop Menu */}
        <Flex
          align={["center"]}
          justify="space-between"
          direction={["row"]}
          pt={[4, 4, 0, 0]}
          display={{ base: "none", md: "flex" }}
        >
          {/* Regular Menu Items */}
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/#features">Features</MenuItem>
          <MenuItem to="/#setup">Setup</MenuItem>
          <MenuItem to="/#faqs">FAQs</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem> 
        </Flex>
      </Flex>

      <Box flexBasis={{ base: "100%", md: "auto" }}>
        {/* Drawer for Mobile Menu */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent bg="#2c254b">
            <DrawerCloseButton />
            <DrawerHeader color="white">Menu</DrawerHeader>
            <DrawerBody>
              {/* Mobile Menu Items */}
              <VStack>
                <MobileMenuItem to="/" isLast>
                  Home
                </MobileMenuItem>
                <MobileMenuItem to="/#features" isLast>
                  Features
                </MobileMenuItem>
                <MobileMenuItem to="/#setup" isLast>
                  Setup
                </MobileMenuItem>
                <MobileMenuItem to="/#faqs" isLast>
                  FAQs
                </MobileMenuItem>
                <MobileMenuItem to="/blog">Blog</MobileMenuItem>

              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Header;
