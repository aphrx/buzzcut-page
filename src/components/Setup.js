import { Box, Flex, Heading, VStack, Text, Image, Grid, GridItem } from '@chakra-ui/react';

const SetupBox = ({ title, image, description }) => (
  <Box
    pt={6}
    bg="#2c254b"
    borderRadius="md"
    shadow="md"
    textAlign="center"
    _hover={{
      shadow: 'lg',
      transform: 'scale(1.01)',
      transition: 'all 0.2s ease-in-out',
    }}
    color="white"
    height="400px"  // Increased height for larger boxes
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    width="100%"   // Ensure it takes up full width of its container
  >
    
    <Heading size="md" mb={2} px={2}>
      {title}
    </Heading>
    <Flex justify="center">
      <Image src={image} height={300} alt="Setup Image" />  {/* Adjust image size */}
    </Flex>  </Box>
);

export default function Setups({ setups }) {
  if (!setups || !setups.length) {
    return (
      <VStack w="100%" spacing={8}>
        <Heading fontSize="2xl" fontWeight="bold" color="white" p={4}>
          How to Setup
        </Heading>
        <Text color="white">No setups available.</Text>
      </VStack>
    );
  }

  return (
    <VStack w="100%" spacing={8}>
      <Heading fontSize="2xl" fontWeight="bold" color="white" p={4}>
        How to Setup
      </Heading>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align="flex-start"
        w="100%"
        gap={8}
      >
        {/* Setup Boxes (3 Boxes) */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
          w="100%"  // Ensure grid takes full width
          maxW="100%" // Max width 100% to avoid unnecessary margins
          marginTop={{ base: '0px', md: '40px' }}
        >
          {setups.map((setup, index) => (
            <GridItem key={index} width="100%">
              <SetupBox
                title={setup.title}
                image={setup.image}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </VStack>
  );
}
