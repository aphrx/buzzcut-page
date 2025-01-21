import { HashLink as Link } from "react-router-hash-link"; // Import the HashLink component
import { Box, VStack, Button, Flex, Text, Image, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, DrawerCloseButton } from "@chakra-ui/react";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MenuItem = (props) => {
  const { children, isLast, to, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      {/* Correctly pass to prop for HashLink */}
      <Link smooth to={to}>
        {children}
      </Link>
    </Text>
  );
};

const MobileMenuItem = ({ children, to, onClick }) => (
  <Link smooth to={to}><Button
    w="100%"
    bg="#140d37"
    onClick={onClick}
  >
    {children}
  </Button></Link>
);

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Custom menu state

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
            src="/logo.webp"
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
          onClick={toggleMenu}
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
          {/* <MenuItem to="/#pricing">Pricing</MenuItem> */}
          <MenuItem to="/blog">Blog</MenuItem> 
        </Flex>
      </Flex>

       {/* Custom Drawer (Mobile) */}
       <Box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        left={0}
        bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay
        display={isMenuOpen ? "block" : "none"} // Only show overlay when menu is open
        onClick={toggleMenu} // Close menu when clicking overlay
      />
      
      {/* Menu Drawer */}
      <Box
        position="fixed"
        top={0}
        left={0}
        bottom={0}
        width="250px"
        bg="#2c254b"
        transform={isMenuOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.3s ease"
        zIndex="1000" // Ensure it sits above other content
        p={4}
      >
        {/* Drawer Content */}
        
        <VStack align="stretch" mt={6}>
          <MobileMenuItem to="/" onClick={toggleMenu}>
            Home
          </MobileMenuItem>
          <MobileMenuItem to="/#features" onClick={toggleMenu}>
            Features
          </MobileMenuItem>
          <MobileMenuItem to="/#setup" onClick={toggleMenu}>
            Setup
          </MobileMenuItem>
          <MobileMenuItem to="/#faqs" onClick={toggleMenu}>
            FAQs
          </MobileMenuItem>
          {/* <MobileMenuItem to="/#pricing" onClick={toggleMenu}>
            Pricing
          </MobileMenuItem> */}
          <MobileMenuItem to="/blog" onClick={toggleMenu}>
            Blog
          </MobileMenuItem>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Header;