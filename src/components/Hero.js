import { Box, Flex, Image, Heading, Stack } from '@chakra-ui/react';

export default function Hero({ id, title, subtitle, image, ...rest }) {
  return (
    <section
  id={id}
  style={{
    height: "auto",
  }}
>
  <style>
    {`
      @media (min-width: 768px) {
        #${id} {
          height: 80vh;
        }
      }
    `}
  </style>
      <Flex
        align="center"
        justify="space-between" // Adjust based on your layout
        direction={{ base: 'column', md: 'row' }}
        wrap="no-wrap"
        px={{ base: 4, md: 8 }}
        {...rest}
      >
        {/* Text Section */}
        <Stack
          spacing={4}
          w={{ base: '80%', md: '50%' }}
          align={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h1" size="xl" fontWeight="bold" color="primary.800">
            {title}
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
          >
            {subtitle}
          </Heading>
          <Stack
            direction={{ base: 'row' }}
            w={{ base: '100%', md: '70%'}}
            spacing={4}
            align="center"
          >
            <Box minHeight="50px" minWidth="150px">
              <a
                href="https://apps.apple.com/us/app/buzzcut-automated-buzzer/id6499471607"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/app_store.webp"
                  alt="iOS App Store Download"
                  objectFit="contain"
                  w="100%"
                  h="auto"
                />
              </a>
            </Box>
            <Box minHeight="50px" minWidth="150px">
              <a
                href="https://play.google.com/store/apps/details?id=io.aphrx.buzzcut&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google_store.webp"
                  alt="Google Play Store Download"
                  objectFit="contain"
                  w="100%"
                  h="auto"
                />
              </a>
            </Box>
          </Stack>
        </Stack>

       {/* Image Section */}
<Box
  w={{ base: '100%', md: '35%' }}
  display="flex"
  justifyContent={{ base: 'center', md: 'center' }} // Align to the right on larger screens
  alignItems="center"
  pr={{ base: 0}} // Add padding on the right for alignment adjustment
  mr={{ base: 0}} // Optionally push the image further left
>
  <Image
    src={image || '/hero-image.png'}
    alt="Hero Image"
    objectFit="contain" // Adjust based on desired fit (cover or contain)
    h={{md: 'auto'}} // Make the image height 100% of the container
    w={{md: 'auto'}} // Maintain aspect ratio
    borderRadius="md"
    mb={{md: 'auto'}}
  />
</Box>

      </Flex>
    </section>
  );
}
