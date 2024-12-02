// routes/Privacy.js
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      bg="#140d37" 
    >
      <Header />
      <Heading as="h1" color="white" mb={4}>Terms of Use (EULA)</Heading>
      
      <Text color="white" mb={4}>
      This End-User License Agreement (“Agreement”) is a legal agreement between you (“User,” “You,” or “Your”) and Aphrx Inc. (“Company,” “We,” “Our,” or “Us”) concerning your use of the Buzzcut mobile application (“App”) provided by Aphrx Inc. By downloading, installing, or using the App, you agree to comply with and be bound by the following terms of use.
      <br />
      <br />

<strong>1. License Grant</strong>
<br/>
Aphrx Inc. grants you a non-exclusive, non-transferable, revocable, and limited license to download, install, and use the App for personal, non-commercial use only, in accordance with the terms of this Agreement.
<br />
<br />
<strong>2. User Responsibilities</strong>
<br />
- You are responsible for ensuring that the App is used in compliance with all applicable laws, rules, and regulations in your jurisdiction.
<br />
- The App is designed to control and manage buzzer systems. It is your responsibility to ensure proper configuration and usage. Aphrx Inc. will not be liable for any misuse, unauthorized access, or security breaches resulting from your failure to secure the App and its functionalities.
<br />
- You must not attempt to reverse engineer, decompile, or otherwise access the source code of the App.
<br />
<br />
<strong>3. Restrictions on Use </strong><br/>You agree not to:
<br />
- Use the App for any unlawful or illegal purposes.
<br />
- Share your login credentials or access to the App with unauthorized individuals.
<br />
- Interfere with or disrupt the functionality of the App, including tampering with any security features or modifying the App in any way.
<br />
- Use the App in a manner that causes harm, damage, or inconvenience to others, including residents of your building or apartment.
<br />
<br />
<strong>4. Updates and Modifications </strong><br/>Aphrx Inc. reserves the right to modify, suspend, or discontinue the App, or any part of it, at any time without prior notice. We may also provide updates to improve the functionality or security of the App. It is your responsibility to ensure that you have the latest version of the App installed.
<br />
<br />
<strong>5. Data Collection and Privacy</strong><br/> The use of the App may involve the collection and use of certain personal data. Please refer to our Privacy Policy for more information about how we collect, use, and protect your personal data.
<br />
<br />
<strong>6. Limitation of Liability</strong><br/> To the maximum extent permitted by applicable law, Aphrx Inc. and its affiliates, directors, officers, and employees will not be liable for any indirect, incidental, or consequential damages arising out of or related to your use or inability to use the App, including but not limited to loss of data, security breaches, unauthorized access, or failure of the buzzer system.
<br />
<br />
<strong>7. Disclaimer of Warranties</strong><br/> The App is provided “as is” and “as available” without any warranties, either express or implied. We do not warrant that the App will be error-free, uninterrupted, or free from viruses or other harmful components.
<br />
<br />
<strong>8. Termination</strong><br/> This Agreement will remain in effect until terminated by you or Aphrx Inc. Aphrx Inc. reserves the right to terminate your access to the App at any time for any reason, including violation of this Agreement.
<br />
<br />
<strong>9. Governing Law</strong><br/> This Agreement will be governed by and construed in accordance with the laws of Canada. Any disputes arising from this Agreement will be subject to the exclusive jurisdiction of the courts in Canada.
<br />
<br />
<strong>10. Contact Information</strong><br/>  If you have any questions about this Agreement, please contact us at: support@aphrx.com


      </Text>

      <Footer/>
    </Flex>
  );
};

export default TermsPage;
