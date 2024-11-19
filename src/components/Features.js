import { Box, Flex, Heading, VStack, Text, Image, Grid, GridItem } from '@chakra-ui/react';

const FeatureBox = ({ title, image, description }) => (
  <Box
    p={6}
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
  >
    <Flex justify="center" mb={4}>
      <Image src={image} height={50} alt="Feature Image" />
    </Flex>
    <Heading size="md" mb={4} px={2}>
      {title}
    </Heading>
    <Text fontSize={12}>{description}</Text>
  </Box>
);

export default function Features({ features, videoUrl }) {
  return (
    <VStack w="100%" spacing={8}>
      <Heading fontSize="2xl" fontWeight="bold" color="white" p={4}>
        Key Features
      </Heading>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align="flex-start"
        w="100%"
        gap={8}
      >
        {/* Video Section */}
        <Box flex="1" maxW={{ base: '100%', lg: '50%' }} position="relative" pb="56.25%" h="0" display={{ base: 'none', lg: 'block' }}       >
          <video
            src="buzzer3.mp4"
            title="Buzzcut Demo Video"
            loop
            muted
            autoPlay
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '80%',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Feature Boxes Section */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={6}
          flex="1"
          maxW={{ base: '100%', lg: '50%' }}
          marginTop={{base: '0px', md: '40px'}}
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
  );
}
