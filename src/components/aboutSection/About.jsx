import React, { useState } from 'react';
import { Box, Text, Stack, Badge, Flex, Image, Button } from '@chakra-ui/react';
import VerticalLineWithText from './VerticalLineWithText';
import myImage from '../../images/linkedinProfile.jpeg'
import { Link as ScrollLink } from 'react-scroll';
const About = () => {
    const [isShow,setIsShow] = useState(false);
  return (
    <Flex
  direction="column"
  mx="auto"
    overflow="hidden"
   w="90%"
  justifyContent="center"
  alignItems="center"
  p="40px 0px"
  className='about section'
>
  <Flex w="90%" direction="column" justifyContent="center" alignItems="center" gap="20px">
    <Text fontSize="4xl" fontWeight="bold" mb="4" data-aos="zoom-in">About Me</Text>
    <Flex w={'100%'} p={'10px 0px'} direction={['column','column','row','row']} pb={'20px'}   alignItems={'center'} data-aos="fade-up-right">
        <Image  borderRadius={"full"}  id='home-img'  w={'280px'} h={'280px'} src={myImage} objectFit="cover" objectPosition="center 30%" />
        <Flex direction={'column'} w={['100%','100%','100%','35%']} p={'10px 5px'} >
            <Text id='user-detail-name' borderLeft={["5px solid gray","5px solid gray","none","none"]} fontSize={['2xl','3xl','4xl','4xl']} fontWeight={'700'} pl="10px" pb={'10px'}>
            Adarsh
            </Text>
            <Text fontWeight={'500'} pl="10px">
            Creating scalable digital experiences with clean, efficient code. <Text as={'span'}>💻✨</Text>
            </Text>
            <ScrollLink to={"contact"} smooth={true} duration={500}>
            <Button mt={"15px"} ml={"10px"} w={"max-content"} variant="outline" borderColor="yellow.400" color="yellow.400" _hover={{ bg: "yellow.400", color: "black" }}>
  Get in Touch
</Button>
            </ScrollLink>
            
        </Flex>
    </Flex>
    <Stack spacing={3} data-aos="fade-up-left" id='user-detail-intro'>
  <Text fontSize="large">
    <Text as={'span'}></Text>
    <Badge fontSize="medium" colorScheme="teal" wordBreak="break-word">FULL-STACK DEVELOPER</Badge> with 3 years of experience building scalable, real-time applications.
  </Text>
  <Text fontSize="large">
  At <Badge fontSize="medium" colorScheme="purple" wordBreak="break-word">Pepsales AI</Badge>, I lead frontend initiatives for our AI-driven admin panel, implementing 
  <Badge fontSize="medium" colorScheme="blue" wordBreak="break-word"> low-latency socket communication</Badge>, 
  <Badge fontSize="medium" colorScheme="blue" wordBreak="break-word"> role-based access controls</Badge>, and 
  <Badge fontSize="medium" colorScheme="blue" wordBreak="break-word"> performance optimization</Badge> techniques.
</Text>

<Text fontSize="large">
  Specialized in building applications with 
  <Badge fontSize="medium" colorScheme="red" wordBreak="break-word"> REACT</Badge>, 
  <Badge fontSize="medium" colorScheme="red" wordBreak="break-word"> NODE.JS</Badge>, and 
  <Badge fontSize="medium" colorScheme="red" wordBreak="break-word"> AWS</Badge> 
  while crafting intuitive user experiences backed by solid backend architecture.
</Text>


  {
    isShow && (
      <Flex direction={'column'}>
        <Text fontSize="large">
          Previously at <Badge fontSize="medium" colorScheme="purple" wordBreak="break-word">Growpital</Badge>, I helped develop secure, serverless infrastructure that powered 
          <Badge fontSize="medium" colorScheme="teal" wordBreak="break-word"> ₹50+ crore</Badge> in investments, serving over 
          <Badge fontSize="medium" colorScheme="teal" wordBreak="break-word"> 1,000+ NRI users</Badge>.
        </Text>
        <br />

        <Text fontSize="large">
          I've contributed to open-source projects in the 
          <Badge fontSize="medium" colorScheme="green" wordBreak="break-word"> Mozilla</Badge> and 
          <Badge fontSize="medium" colorScheme="green" wordBreak="break-word"> Apache</Badge> communities, 
          focusing on developing maintainable and efficient solutions.
        </Text>
        <br />

        <Text fontSize="large">
          From chat applications to investment dashboards, I thrive on solving complex problems with clean, efficient code
          while continuously exploring new technologies and approaches.
        </Text>
      </Flex>
    )
  }

<Button w={"max-content"} bgColor={"yellow.400"} onClick={()=>{setIsShow(!isShow)}} maxW={'max-content'} borderColor="yellow.400" color="black" _hover={{ bg: "yellow.400", color: "black" }}>
    {isShow ? 'Read less' : 'Read more'}
  </Button>
</Stack>

  </Flex>

   
</Flex>

  );
};

export default About;
