import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
} from '@chakra-ui/react';

export default function Hero({
  title,
  subtitle,
  image,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'flex-start', xl: 'space-between' }}
      direction={{ base: 'column', md: 'row' }} // Change direction for mobile view
      wrap="no-wrap"
      minH="70vh"
      px={{ base: 1, md: 8 }}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '50%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
        order={{ base: 1, md: 1 }} // Make text appear first on larger screens and second on mobile
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <Stack
          w={{ base: '80%', md: '70%', sm: '100%' }}
          direction={{ base: 'column', sm: 'row' }} // Change direction based on screen size
          align="center"
          spacing={4} // Add spacing between badges
        >
          <Box minHeight="50px" minWidth="150px" > {/* Minimum height and width for consistent size */}
            <a
              
              href="https://apps.apple.com/us/app/buzzcut-automated-buzzer/id6499471607"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                alt="iOS App Store Download"
                boxSize={{ base: '100%', sm: 'auto' }} // Use full width for small screens
                objectFit="contain" // Ensures the image fits within the Box
              />
            </a>
          </Box>
          <Box minHeight="50px" minWidth="150px"> {/* Minimum height and width for consistent size */}
            <a
              href="https://play.google.com/store/apps/details?id=io.aphrx.buzzcut&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play Store Download"
                boxSize={{ base: '100%', sm: 'auto' }} // Use full width for small screens
                objectFit="contain" // Ensures the image fits within the Box
              />
            </a>
          </Box>
        </Stack>
      </Stack>
      <Box
        w={{ base: '80%', sm: '60%', md: '25%' }}
        mb={{ base: 12, md: 0 }}
        mt={{ base: 12, md: 0 }}
        ml={{ sm: 12 }}
        mr={{ sm: 12 }}
        order={{ base: 1, md: 2 }} // Make image appear below the text on mobile
      >
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}
