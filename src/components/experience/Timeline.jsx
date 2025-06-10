import React from 'react';
import { Box, Flex, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import ReadOnlyContent from '../ReadOnlyMarkdown';

// const experiences = [
//   {
//     role: 'Frontend Developer',
//     company: 'Pepsales AI',
//     duration: 'Sep 2024 - Present',
//     description: 'Designed and implemented advanced real-time UI features using React.js, Redux Toolkit, and Tailwind CSS. Optimized complex UI components for performance and scalability. Developed a picture-in-picture interactive response system, integrated role-based access control, built a dynamic table management system, and implemented real-time notifications using Pusher. Engineered an AI-powered assistance module with real-time streaming and optimized socket-based communication for low-latency interactions.'
//   },
//   {
//     role: 'Full Stack Web Developer', 
//     company: 'Masai School',
//     duration: 'Sep 2023 - Present',
//     description: 'Developed various applications and features. Crafting seamless user experiences and robust backend solutions.',
//   },
//   {
//     role: 'System Engineer',
//     company: 'Tata Consultancy Services',
//     duration: 'Jan 2021 - Oct 2022',
//     description: 'Collaborated with cross-functional teams to implement solutions, streamlining processes and improving data accuracy and system reliability',
//   },
//   {
//     role: 'Bachelor of Engineering',
//     company: 'Computer Science and Engineering',
//     duration: 'Jun 2016 - May 2020',
//     description: 'Completed a Bachelor of Engineering with a CGPA of 8.5, demonstrating strong analytical and technical skills.',
//   },
//   {
//     role: 'Higher Secondary',
//     company: 'Science',
//     duration: 'Jun 2015 - May 2016',
//     description: 'Achieved a 71% score, demonstrating strong academic performance and readiness for further studies.',
//   },
//   {
//     role: 'Secondary',
//     company: 'State Board',
//     duration: 'Jun 2013 - May 2014',
//     description: 'Excelled in Secondary education with an 86% score,  underscoring a commitment to academic excellence.',
//   },
//   // Add more experiences as needed
// ];
const experiences = [
  {
    role: "Software Developer",
    company: `**Pepsales AI** *(Bengaluru, India)*`,
    duration: "Nov 2024 - Present",
    description: `- Developed a **real-time call-analysis** player that synchronizes transcripts with sales recordings.
- Built **Recharts-based dashboards** to visualize conversation metrics for 100+ sales representatives.
- Designed and implemented dynamic UI features using React and Material UI with **role-based navigation**.
- Built a cross-platform Electron application for launching live website demos with Puppeteer.
- Automated **CI/CD pipelines** with GitHub Actions for deployments to AWS S3.`
  },
  {
    role: "Software Developer",
    company: `**Yotta Agro Ventures Pvt Ltd** *(Remote)*`,
    duration: "May 2023 - Aug 2024",
    description: `- Collaborated with external partners to develop investment APIs, facilitating over **54 million** in investments.
- Served more than **1,000 non-resident Indian users** with secure financial services.
- Implemented user management features using **React, Node.js, Redux, and AWS Cognito**.
- Developed scripts to detect and mitigate fraudulent activities, enhancing security for over **16,000 users**.`
  },
  {
    role: "Software Developer Intern",
    company: `**Agile RecuriTech LLP** *(Remote)*`,
    duration: "Oct 2022 - Apr 2023",
    description: `- Developed an admin panel backend with **serverless architecture** to manage user data.
- Utilized **AWS S3** for document storage and **DynamoDB** for data management.
- Designed and implemented **webhooks** to automate and optimize the investment creation process.
- Ensured real-time notifications and enhanced overall efficiency of the platform.`
  },
  {
    role: "Bachelor of Computer Application",
    company: "Computer Science and Engineering",
    duration: "Jun 2021 - May 2024",
    description: `- Earned a Bachelor of Computer Application in **Computer Science & Engineering** with a **CGPA of 8**.  
- Developed strong **technical skills**.`
  }
];



const ExperienceCard = ({ experience, isLeft,index }) => {

    const {colorMode} = useColorMode()
    return (<Flex
        direction="column"
        alignItems={isLeft ? 'flex-end' : 'flex-start'}
        w="full"
        mb={10}
        position="relative"
    
       >
        <Box
          bg={colorMode=='dark'?'#B9C9EB':'#B9C9EB'}
          p={4}
          borderRadius="md"
          w={{ base: '89%', md: '35%' }}
          boxShadow="md"
          position="relative"
          zIndex={1}
          ml={isLeft ? 'initial' : ['7%','5%','51.5%','51.1%']}
          mr={isLeft ? '50.8%' : 'initial'}
        color={'black'}
        data-aos={index %2 ===0 ?"fade-up-right":"fade-up-left"}
        data-aos-delay="0"
        data-aos-duration="700"
        >
          <Text fontSize="xl" fontWeight="bold">
            {experience.role}
          </Text>
          <ReadOnlyContent markdownContent={experience.company}/>

          <Text fontSize="sm" mt={"-14px"} mb={"8px"} color="gray.700">
            {experience.duration}
          </Text>
          <ReadOnlyContent markdownContent={experience.description}/>

        </Box>
        <Box
          border="1px solid gray"
          borderRadius="full"
          w="10px"
          h="10px"
          bg="#EDBB3C"
          position="absolute"
          left={{ base: '10px', md: isLeft ? 'calc(50% - 5px)' : 'calc(50% - 5px)' }}
          right={{ md: isLeft ? 'initial' : 'calc(50% - 5px)' }}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1}
          ml={isLeft?'2px':'3px'}
          data-aos="fade-up"
        />
      </Flex>)
    // comment
  
};

const Timeline = () => {
  const isMobile = useBreakpointValue({ sm: true,base:true,md:false, lg: false });

  return (
    <Flex direction="column" alignItems="center" position="relative"  w="100%" >
   

      <Box
        borderLeft={{ base: '4px solid gray', md: 'none' }}
        position="absolute"
        left={{ base: '15px', md: '50%' }}
        height="95%"
        zIndex={0}
       data-aos="fade-up"

      />
      <Box
        borderRight={{ base: 'none', md: '4px solid gray' }}
        position="absolute"
        left={{ base: '15px', md: '50%' }}
        height="95%"
        zIndex={0}
        data-aos="fade-up"

      />
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} index={index} experience={exp} isLeft={!isMobile && index % 2 === 0} />
      ))}
    </Flex>
  );
};

export default Timeline;
