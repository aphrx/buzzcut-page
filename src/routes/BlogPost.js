import { useParams } from "react-router-dom";
import { Flex, Heading, Text, Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { marked } from 'marked';

// Custom renderer for marked (with strong handling)
const renderer = new marked.Renderer();

// Handle headers with custom styles
renderer.heading = (text, level) => {
  const size = level === 1 ? '2xl' : level === 2 ? 'xl' : 'lg';
  return `<h${level} style="font-size: ${size}; font-weight: bold; color: white; margin-bottom: 16px;">${text.text}</h${level}>`;
};

// Handle paragraphs with custom styles
renderer.paragraph = (text) => {
  return `<p style="margin-bottom: 16px; line-height: 1.6; color: #f3f4f7;">${text.text}</p>`;
};

// Handle text and replace newlines with <br />
renderer.text = (text) => {
  return text.text.replace(/\n/g, '<br /><br />'); // replace newlines with <br />
};

// Handle strong (bold) text
renderer.strong = (text) => {
  return `<strong style="font-weight: bold; color: #4A90E2;">${text.text}</strong>`;
};

// Handle em (italic) text
renderer.em = (text) => {
  return `<em style="font-style: italic; color: #F1A7A6;">${text.text}</em>`;
};
 

const BlogPost = () => {
  const { slug } = useParams(); // Get the slug from the URL

  // Test Data for Markdown
  const posts = {
    "how-to-modernize-your-buzzer-system": {
      title: "How to Modernize Your Buzzer System",
      content: `
  ## Introduction
  
  Buzzer systems have been around for decades as a way to grant access to visitors in multi-unit buildings, apartments, and secured areas. While traditional buzzer systems may have served their purpose in the past, they often lack the security, convenience, and flexibility needed in today’s world. As technology advances, it’s becoming increasingly important to upgrade these outdated systems to smart access control solutions.
  
  This post will guide you through the process of modernizing your buzzer system, covering the benefits of upgrading, the essential features of a smart system, and steps to transition from your old setup.
  
  ## Why Upgrade Your Buzzer System?
  <br/>
  <br/>

  ### 1. Enhanced Security
  - Vulnerability: Traditional buzzer systems are often easy targets for hackers and can be bypassed. Unauthorized visitors could gain access without proper verification.
  - Smart Security: With a modern system, you can integrate additional security features like video surveillance, two-way audio, and encrypted communication to ensure that only authorized people gain access.
  <br/>

  ### 2. Convenience
  - Remote Access: A smart buzzer system lets you control access from anywhere, whether you’re at work, at the gym, or on vacation.
  - No More Lost Keys: Say goodbye to physical keys or fobs. With smart access systems, you can use your smartphone or a keyless entry code to unlock the door.
  - Real-time Notifications: Stay in the loop with instant notifications when someone is at the door.
  <br/>

  ### 3. Flexibility
  - Integration with Other Smart Devices: Modern buzzer systems can integrate with other devices like cameras, smart locks, and even home automation systems.
  - Customizable Access: You can set specific access times or share access with different individuals for different periods.
  <br/>
  
  ### 4. Increased Property Value
  - Smart Home Appeal: With smart home technology on the rise, a modern buzzer system can increase the appeal and value of your property. It gives your building or home a contemporary edge and improves its security infrastructure.
  <br/>

  ## Key Features of a Modern Buzzer System
  <br/>
  <br/>

  ### 1. Remote Access and Control
  The cornerstone of any smart buzzer system is the ability to control access remotely. Whether via a mobile app or web portal, you can unlock doors from anywhere in the world, enabling you to grant access to guests, delivery people, or service personnel without being physically present.
  <br/>

  ### 2. Video and Audio Communication
  Many modern buzzer systems feature HD video and two-way audio, allowing you to see and communicate with visitors before granting access. This feature is great for security, as you can confirm the identity of the person at the door before allowing entry.
  <br/>

  ### 3. Integration with Other Smart Home Devices
  A modern buzzer system can be integrated with other smart home devices such as security cameras, lighting systems, or even smart locks. For instance, you can have your lights turn on automatically when someone rings the buzzer or lock/unlock your doors remotely via the same app.
  <br/>

  ### 4. Temporary Access and Scheduling
  Some systems allow you to create temporary access codes for guests or service workers, enabling them to enter at specific times. For example, you can give a cleaning service access only during certain hours, or provide an Uber Eats driver with a one-time code to drop off food.
  <br/>

  ### 5. Notifications and Alerts
  A modern system will send real-time notifications whenever someone rings the buzzer or attempts to access the building. You’ll receive an alert on your phone or other device, allowing you to respond instantly if necessary.
  <br/>

  ## Steps to Modernize Your Buzzer System
  <br/>

  Transitioning from a traditional buzzer system to a modern, smart system is simpler than you might think. Here are the basic steps:
  <br/>
  
  1. Assess Your Needs: Identify what features are important for your home or building. Do you need video surveillance? Will you want remote access control? Consider how many units or people will need access to the system.
  
  2. Choose a Smart Buzzer System: There are many systems on the market, so research and select one that fits your needs. Look for features like video/audio communication, remote access, compatibility with other smart devices, and robust security protocols.
  
  3. Install the System: Many smart buzzer systems are easy to install, especially if you’re replacing an old wired buzzer system. Follow the manufacturer’s instructions or consider hiring a professional to ensure everything is set up correctly.
  
  4. Set Up Remote Access: Once installed, set up remote access through an app or web portal. This will allow you to control the system from anywhere and manage access for various individuals.
  
  5. Integrate with Other Devices: If you have other smart devices in your home, like a smart lock or security camera, consider integrating your buzzer system with those devices. This will create a more seamless and secure experience.
  
  6. Test and Adjust Settings: Finally, test your new system to ensure everything is working properly. Adjust any settings, such as access schedules or notifications, to match your needs.
  
  ## Conclusion
  
  Modernizing your buzzer system is a great way to enhance the security, convenience, and flexibility of your home or building. With smart features like remote access, video/audio communication, and integration with other smart devices, you can take control of your entryway in ways that were never possible before. The investment in a modern buzzer system will not only improve your daily life but also increase the security and value of your property.
      `,
    },
    
    "the-future-of-smart-access-control": {
      title: "The Future of Smart Access Control",
      content: `
  ## Introduction
  
  Smart access control is rapidly becoming the standard for securing buildings and homes. With the rise of IoT and smart home technologies, traditional security systems are being replaced with more advanced, intelligent solutions. This post explores the trends shaping the future of smart access control and how these innovations will impact security for years to come.
  
  ## Key Trends in Smart Access Control
  
  ### 1. Biometric Authentication
  The use of biometric data, such as fingerprints, facial recognition, and retina scans, is revolutionizing access control. With the accuracy and convenience that biometrics offer, traditional methods like keys and access cards are becoming obsolete.
  
  ### 2. Mobile Access Control
  Mobile phones are increasingly being used as the primary tool for access control. With Bluetooth and NFC technology, your smartphone can unlock doors with just a tap, eliminating the need for physical keys or cards.
  
  ### 3. Cloud-Based Systems
  Cloud-based access control systems are gaining popularity due to their flexibility and scalability. These systems allow users to manage access from anywhere in the world, update permissions remotely, and monitor activity in real-time.
  
  ### 4. Integration with Other Smart Devices
  Access control systems are becoming more integrated with other smart home and building management systems. This includes security cameras, lighting, HVAC systems, and more, creating a seamless and efficient experience for building owners and residents.
  
  ## Challenges and Considerations
  
  Despite the benefits, there are still challenges to implementing smart access control systems. Some of the key considerations include:
  
  - Privacy Concerns: With the use of biometric data and continuous monitoring, there are concerns about data privacy and security.
  - Cost: While the technology is advancing, it can still be costly to implement for some businesses and homeowners.
  - Integration with Legacy Systems: Many older buildings and facilities have legacy access control systems that may be difficult or expensive to upgrade.
  <br/>

  ## Conclusion
  
  The future of smart access control is bright, with a range of exciting innovations on the horizon. From biometric authentication to cloud-based management, these advancements will continue to improve security, convenience, and efficiency for buildings and homes across the globe.
      `,
    },
  
    "buzzcut-hidden-features": {
      title: "Buzzcut Features You Didn’t Know About",
      content: `
  ## Introduction
  
  Buzzcut is more than just a buzzer system. It’s a smart and versatile platform that offers a wide range of features designed to make access control simpler and more efficient. In this post, we’ll highlight some of the hidden features you may not know about Buzzcut that can significantly improve your experience.
  
  ## Hidden Features of Buzzcut
  <br/>

  ### 1. Temporary Access Codes
  You can generate temporary access codes for guests or service workers, enabling them to enter only during specific hours. This feature is especially useful for deliveries, maintenance workers, or cleaning services.
  
  ### 2. Remote Access Control
  With the Buzzcut mobile app, you can grant access to your building from anywhere in the world. Whether you’re traveling, at work, or simply busy, you can manage access remotely.
  
  ### 3. Call Forwarding
  Buzzcut allows users to forward buzzer requests to other users. This is great if you have roommates or a significant other that may also want access to the buzzer.
  
  ### 4. Customizable Access Schedules
  You can set custom access schedules for different users or groups. For example, give your cleaning service access only on weekdays between 9 AM and 3 PM, or allow a guest to enter only during specific hours.
  
  ### 5. Real-Time Notifications
  Buzzcut sends you real-time notifications whenever someone rings the buzzer or attempts to enter. This feature keeps you informed and ensures that you’re always in control of who’s at the door.
  
  ## Conclusion
  
  Buzzcut is packed with features that make it a powerful and convenient tool for managing access to your home or building. By taking full advantage of these hidden features, you can enhance security, streamline access control, and improve the overall experience for everyone involved.
      `,
    },
  };
  

  const post = posts[slug];

  if (!post) {
    return <Text>Post not found!</Text>;
  }

  // Convert Markdown to HTML using marked
  const postContentHtml = marked(post.content, { renderer });

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      bg="#140d37" 
    >
      <Header />
      <Flex
      direction="column"
      align="center"
      maxW="900px"
      m="0 auto"
      bg="#140d37"
      p={4}
    >
      <Heading as="h1" size="2xl" mb={6} color="white">{post.title}</Heading>
      {/* Render the HTML content */}
      <Box mt={4} dangerouslySetInnerHTML={{ __html: postContentHtml }} />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogPost;
