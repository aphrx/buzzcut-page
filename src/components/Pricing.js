import { Box, Flex, Heading, VStack, Text, Grid, GridItem } from '@chakra-ui/react';

const PricingBox = ({ title, notes, status }) => {
  const isComingSoon = status === 'comingSoon';
  const isStandard = status != 'comingSoon';

  return (
    <Box
      pt={6}
      bg={isComingSoon ? "#808080" : "#2c254b"} // Grey out the "Coming Soon" boxes
      borderRadius="3xl"
      shadow="md"
      textAlign="center"
      _hover={{
        shadow: isComingSoon ? 'none' : 'lg',
        transform: isComingSoon ? 'none' : 'scale(1.01)',
        transition: 'all 0.2s ease-in-out',
      }}
      color="white"
      height="200px"  // Adjusted height for better note display
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      opacity={isComingSoon ? 0.6 : 1}  // Grey out the "Coming Soon" boxes
    >
      <Heading size="md" mb={2} px={2}>
        {title}
      </Heading>

      {/* Display multiple notes */}
      <VStack spacing={2} flexGrow={1} >
        {notes.map((note, index) => (
          <Text key={index} color="white" fontSize="md" textAlign={"left"}>
            {note}
          </Text>
        ))}
      </VStack>

      {/* Display status */}
      <VStack spacing={1} align="center" pb={4}>
        {isComingSoon ? (
          <Text color="white" fontSize="lg" fontWeight="bold">
            Coming Soon
          </Text>
        ) : isStandard ? (
          <Text color="white" fontSize="lg" fontWeight="bold">
            {status} {/* Display the price if it's standard */}
          </Text>
        ) : null}
      </VStack>
    </Box>
  );
};

export default function Setups({ id, setups }) {
  // Defining the data for the three boxes with multiple notes and monthly prices
  const setupData = [
    {
      title: 'Community',
      notes: ['- Community Buzzcut Number.', '- All triggers except call forwarding.'],
      status: 'comingSoon'
    },
    {
      title: 'Standard',
      notes: ['- Personal Buzzcut Number.', '- All triggers and integrations.'],
      status: '$3.99/month'
    },
    {
      title: 'Premium',
      notes: ['- Access to Multiple Buzzcut Numbers.'],
      status: 'comingSoon'
    }
  ];

  return (
    <Box id={id} w="100%" mt={8} mb={8}>
      <VStack w="100%" spacing={8} p={8}>
        {/* Section Heading */}
        <Heading fontSize="3xl" fontWeight="bold" color="white" p={4}>
          Pricing
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
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={6}
            w="100%"
            maxW="100%"
            marginTop={{ base: '0px', md: '40px' }}
          >
            {setupData.map((setup, index) => (
              <GridItem key={index} width="100%">
                <PricingBox
                  title={setup.title}
                  notes={setup.notes}
                  status={setup.status}
                />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </VStack>
      <Text textAlign={"center"} fontSize={10} m={8}>All prices are listed in USD. Prices within the app will be converted to reflect the regional currency prior to charge.</Text>
    </Box>
  );
}
