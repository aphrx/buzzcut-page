import {
    Box,
    Flex,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
  
  const FeatureBox = ({ title, description }) => (
    <Box
      p={4}
      bg={"#2c254b"} // Change to a darker purple background
      borderRadius="md"
      shadow="md"
      textAlign="center"
      _hover={{ shadow: 'lg', transform: 'scale(1.01)', transition: 'all 0.2s ease-in-out' }} // Hover effect
      flex="1" // Allow flex to grow
      mx={2} // Margin between boxes
      color="white" // Change text color for contrast
    >
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
  
  export default function Features({ features }) {
    return (
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        w="100%"
        my={12}
      >
        <Flex
          direction="row"
          wrap="wrap"
          justify="space-between"
          w="100%"
        >
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Flex>
      </Flex>
    );
  }
  