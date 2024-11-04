import { Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

export default function Landing(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
      bg="#140d37" 
      
    >
      <Header />
      <Hero
        title="Bring Your Buzzer Into The 21st Century"
        subtitle="Automate Your Buzzer with Buzzcut"
        image="https://i.imgur.com/WwU5FPX.png"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Footer />
    </Flex>
  )
}
