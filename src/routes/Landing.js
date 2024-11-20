import { Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Setups from "../components/Setup"

const featuresData = [
  {
    title: 'Unlock Door',
    image: 'unlock.png',
    description: 'Have the ability to grant access to your building without needing to fumble around with your phone.',
  },
  {
    title: 'Group Access',
    image: 'building.png',
    description: 'Generate a group so that everyone within a unit is able to share access and control a buzzer!',
  },
  {
    title: 'Notifications',
    image: 'bell.png',
    description: 'Let your phone notify you when someone attempted to use your code and grant access accordingly.',
  },
  {
    title: 'Automate',
    image: 'robot.png',
    description: 'Set a wide range of automations so that you don\'t have to hover over your phone to let your Uber Eats delivery in.',
  },
];

const setupData = [
  {
    title: 'Create Number',
    image: '1.png',
  },
  {
    title: 'Update Buzzer',
    image: '2.png',
  },
  {
    title: 'Use Buzzcut',
    image: '3.png',
  },
];



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
        subtitle="Modernize Your Buzzer"
        image="https://i.imgur.com/WwU5FPX.png"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Features features={featuresData}/>
      <Setups setups={setupData}/>
      <Footer />
    </Flex>
  )
}
