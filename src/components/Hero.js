import { Box, Flex, Image, Heading, Stack } from '@chakra-ui/react';

export default function Hero({
  id,
  title,
  subtitle,
  image,
  ...rest
}) {
  return (
    <section id={id} style={{ height: "100vh" }}>

    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-between' }} // Make content space-between on larger screens
      direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on desktop
      wrap="no-wrap"
      minH="70vh"
      px={{ base: 1, md: 8 }}
      mb={16}
      {...rest}
    >
      {/* Text Section */}
      <Stack
        spacing={4}
        w={{ base: '80%', md: '50%' }} // Take up 50% width on large screens
        align={['center', 'center', 'flex-start', 'flex-start']}
        order={{ base: 1, md: 0 }} // Make text appear first on mobile, second on desktop
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
          direction={{ base: 'column', sm: 'row' }} // Stack vertically on mobile, horizontally on desktop
          align="center"
          spacing={4} // Add spacing between badges
        >
          <Box minHeight="50px" minWidth="150px"> {/* Minimum height and width for consistent size */}
            <a
              href="https://apps.apple.com/us/app/buzzcut-automated-buzzer/id6499471607"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download-on-the-App_Store_Badge.svg.png"
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

      {/* Video Section */}
      <Box
        flex="0 0 auto"  // Prevent it from growing or shrinking, it should match the video width
        position="relative"
        pb="56.25%" // Aspect ratio (16:9)
        ml="auto"  // Push the video box to the right
        display={{ base: 'none', lg: 'block' }} // Show the video only on larger screens
        w={{ base: '100%', lg: '50%' }} // Ensure that on large screens, it gets 50% of the width
      >
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
            right: 0,
            // width: '100%', // Ensure it fills the container width
            height: '100%', // Ensure it fills the container height
            objectFit: 'contain', // Maintain aspect ratio within the box
          }}
        />
      </Box>
      
    </Flex>
    </section>
  );
}
