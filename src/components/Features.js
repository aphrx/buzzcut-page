import { Box, Flex, Heading, VStack, Text, Image, Grid, GridItem } from '@chakra-ui/react';

const FeatureBox = ({ title, image, description }) => (
  <Box
    p={6}
    bg="#140d37" // Changed card background to #140d37
    borderRadius="3xl"
    shadow="3xl"
    textAlign="center"
    _hover={{
      shadow: 'lg',
      transform: 'scale(1.01)',
      transition: 'all 0.2s ease-in-out',
    }}
    color="white"
  >
    <Flex justify="center" mb={4}>
      <Image src={image} height={50} alt="Feature Image" />
    </Flex>
    <Heading size="md" mb={4} px={2}>
      {title}
    </Heading>
    <Text fontSize={14}>{description}</Text>
  </Box>
);

export default function Features({ id, features, image }) {
  return (
    <Flex id={id} pt={5}>
    <Box bg="#2c254b" borderRadius={{base: 0, md: "3xl"}} mb={8} mt={8}>
      <VStack w="100%" spacing={8} p={8}>
        {/* Section Heading */}
        <Heading fontSize="3xl" fontWeight="bold" color="white" p={4}>
          Key Features
        </Heading>

        <Flex
          direction={{ base: 'column', lg: 'row' }} // Stack vertically on small screens, horizontally on larger screens
          justify="space-between"
          align="flex-start"
          w="100%"
          gap={8}
        >
          {/* Image Section (Left Side on larger screens) */}
          <Box
            w={{ base: '80%', sm: '60%', md: '25%' }} // Adjust image size for different screen sizes
            mb={{ base: 12, md: 6 }}
            mt={{ base: 12, md: 0 }}
            ml={{ sm: 12 }}
            mr={{ sm: 12 }}
            order={{ base: 2, md: 1 }} // Ensure image is on left on larger screens
            // display="flex"
            display={{ base: 'none', md: 'block' }}
            justifyContent="center"
          >
            <Image
              src={image}
              objectFit="contain" // Ensures the image maintains its aspect ratio
              maxWidth="260px" // Ensures the image doesn't overflow its container
              // maxHeight="500px" // Adjust height if needed
              rounded="1rem"
              shadow="2xl"
            />
          </Box>

          {/* Feature Boxes Section */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} // Single column on small screens, two columns on medium and larger screens
            gap={6}
            order={{base: 2, md: 1}}
            // flex="1"
            maxW={{ base: '100%', lg: '70%' }}
            marginTop={{ base: '0px', md: '40px' }}
          >
            {features.map((feature, index) => (
              <GridItem key={index}>
                <FeatureBox
                  title={feature.title}
                  image={feature.image}
                  description={feature.description}
                />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </VStack>
    </Box>
    </Flex>
  );
}
