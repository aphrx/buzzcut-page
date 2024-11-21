import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const FAQBox = ({ question, answer }) => (
  <Box
    w="100%"
    p={4}
    bg="#140d37"
    borderRadius="3xl"
    shadow="3xl"
    color="white"
  >
    <Accordion allowMultiple>
      <AccordionItem borderBottom="none" borderTop="none">
        {' '}
        {/* Remove the divider by setting borderBottom to none */}
        <h2>
          <AccordionButton
            _expanded={{
              bg: '#140d37', // Active state color for the button
              color: 'white',
            }}
            bg="#140d37" // Set background to purple (matching box color)
            _hover={{
              bg: '#140d37', // Hover state color
              color: 'white',
            }}
            borderRadius="3xl"
            p={4}
            _focus={{ boxShadow: 'none' }}
          >
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold" color="white">
                {question}
              </Text>{' '}
              {/* Ensure text is white */}
            </Box>
            <AccordionIcon color="white" />{' '}
            {/* Ensure the icon is also white */}
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Text color="white">{answer}</Text> {/* Ensure text color is white */}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Box>
);

export default function FAQ({ id, faqs }) {
  if (!faqs || !faqs.length) {
    return (
        <section id={id} style={{ height: "100vh" }}>
      <Box bg="#2c254b" borderRadius={{base: 0, md: "3xl"}} w="100%" mt={8} mb={8}>
        <VStack w="100%" spacing={8} p={8}>
          <Heading fontSize="2xl" fontWeight="bold" color="white" p={4}>
            Frequently Asked Questions
          </Heading>
          <Text color="white">No FAQs available.</Text>
        </VStack>
      </Box>
      </section>
    );
  }

  return (
    // <section id={id} style={{ height: "100vh" }}>
    <Box id={id} bg="#2c254b" borderRadius={{base: 0, md: "3xl"}} w="100%" mt={8} mb={8}>
      <VStack w="100%" spacing={8} p={8}>
        <Heading fontSize="3xl" fontWeight="bold" color="white" p={4}>
          Frequently Asked Questions
        </Heading>
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          w="100%"
          gap={8}
        >
          {/* Grid Layout for FAQ boxes */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} // 1 column on small screens, 2 on larger screens
            gap={8} // Add margin between the boxes
            w="100%" // Ensure grid takes full width
            marginTop={{ base: '0px', md: '40px' }}
          >
            {faqs.map((faq, index) => (
              <GridItem key={index}>
                <FAQBox question={faq.question} answer={faq.answer} />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </VStack>
    </Box>
    // </section>
  );
}
