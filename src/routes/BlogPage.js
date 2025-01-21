import { Flex, Heading, Text, Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "How Buzzcut Transforms Access Control for Airbnbs",
      description: "Discover how Buzzcut’s smart access control system can streamline and simplify property management for Airbnbs hosts.",
      date: "Jan 21, 2025",
      link: "/blog/how-buzzcut-transforms-access-control-for-airbnb-hosts"
    },
    {
      title: "How to Modernize Your Buzzer System",
      description: "Learn how to upgrade your building's buzzer system with modern technology like a smart buzzer.",
      date: "December 1, 2024",
      link: "/blog/how-to-modernize-your-buzzer-system",
    },
    {
      title: "The Future of Smart Access Control",
      description: "Exploring the trends in smart access control for buildings and homes towards smarter technologies such as smart buzzers.",
      date: "November 13, 2024",
      link: "/blog/the-future-of-smart-access-control",
    },
    {
      title: "Buzzcut Features You Didn’t Know About",
      description: "Discover hidden features that can improve your smart buzzer experience and make your Buzzcut experience even better.",
      date: "November 5, 2024",
      link: "/blog/buzzcut-hidden-features",
    },
  ];

  return (
    <Flex
    direction="column"
    align="center"
    maxW={{ xl: "1200px" }}
    m="0 auto"
    bg="#140d37" 
  >
    <Header />
      
      {/* Grid Layout for blog posts */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }} // 1 column on small screens, 2 on medium, 3 on large
        spacing={8}
        w="100%" // Full width of the container
        mb={8}
      >
        {blogPosts.map((post, index) => (
                      <Link to={post.link}>

          <Box
            key={index}
            pt={6}
            bg="#2c254b"
            borderRadius="3xl"
            shadow="md"
            textAlign="left"
            _hover={{
              shadow: 'lg',
              transform: 'scale(1.01)',
              transition: 'all 0.2s ease-in-out',
            }}
            color="white"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={6} // Add padding inside the box
          >
            <Heading as="h3" size="md" mb={2}>
              <Link to={post.link}>{post.title}</Link>
            </Heading>
            <Text mb={4}>{post.description}</Text>
            <Text fontSize="md" color="white" opacity={0.4} mb={2} align={"right"}>
              {post.date}
            </Text>
          </Box>
          </Link>
        ))}
      </SimpleGrid>
      <Footer/>
    </Flex>
  );
};

export default BlogPage;
