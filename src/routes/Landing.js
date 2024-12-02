import { Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Setups from "../components/Setup"
import FAQ from "../components/FAQ"

const featuresData = [
  {
    title: 'Unlock Door',
    image: 'unlock.png',
    description: 'Have the ability to grant access to your building without needing to fumble around with your phone.',
  },
  {
    title: 'Group Access',
    image: 'building.png',
    description: 'Generate a group so that everyone within a unit is able to share access and control a single smart buzzer!',
  },
  {
    title: 'Notifications',
    image: 'bell.png',
    description: 'Let your phone notify you when someone attempted to use your code and grant access accordingly.',
  },
  {
    title: 'Automate',
    image: 'robot.png',
    description: 'Set a range of automations so that you don\'t have to hover over your phone to let your food delivery in.',
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

const faqs = [
  { question: 'Is my buzzer compatiable?', answer: 'Buzzcut is currently capable of converting any buzzer systems that dials to a phone number into a sophisticated smart buzzer!.' },
  { question: 'What happens to Buzzcut if I move?', answer: 'The account would be configured to the phone number. As long as you are moving to another Buzzcut-compatiable building, you can simply deactivate your number from the old buzzer and add it to the new buzzer, and you should be able to operate it with Buzzcut once again!' },
  { question: 'What is a Buzzcut number?', answer: 'A Buzzcut number is a generated VOIP number that Buzzcut generates. Buzzcut is then able to control how this phone number acts based on rules that are set in the app - creating a true smart buzzer experience.' },
  { question: 'Does Buzzcut work if I share a unit with someone else?', answer: 'Yes! The subscription plan is for the group, not per user. So once a Buzzcut number is generated for the group, you can invite users to join the Buzzcut group and access the same smart buzzer triggers that you have access to.' },
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
        id="hero"
        title="Bring Your Buzzer Into The 21st Century"
        subtitle="Modernize Your Buzzer"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Features id="features" features={featuresData} image="https://i.imgur.com/WwU5FPX.png"/> {/* Add ID here */}
      <Setups id="setup" setups={setupData}/> {/* Add ID here */}
      <FAQ id="faqs" faqs={faqs} /> {/* Add ID here */}
      <Footer />
    </Flex>
  );
}
