import React from 'react';
import { Box, Image, Text, Button, SimpleGrid, Link, Icon, Flex } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'; // Make sure to import icons
import { FaGithub } from "react-icons/fa";

import realEstateApp from '../../images/realEstateApp.png'
import digitalInvitaions from '../../images/digitalinvitations.png'
import ytMusicPlayer from '../../images/ytmusicplayer.png'
import groupon from '../../images/groupon.png'
import pharmeasy from '../../images/pharmeasy.png'

const projects = [
  {
    id: 31,
    title: 'Meetify',
    image: 'https://private-user-images.githubusercontent.com/85433137/305921869-bced4aa8-5289-42be-9d39-ec933c4304b9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkzOTE5MjksIm5iZiI6MTc0OTM5MTYyOSwicGF0aCI6Ii84NTQzMzEzNy8zMDU5MjE4NjktYmNlZDRhYTgtNTI4OS00MmJlLTlkMzktZWM5MzNjNDMwNGI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA4VDE0MDcwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY1MWM4Yjk1MzhjNjI0M2Q5N2MwNzU0NjdhMTcwY2EzNTlhNTRmZGU2ZGQ0YzljOTA0Y2U2ZmI5MDY4ZDU3ZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.2b9A8niKvliVIuc7AkpP7oUFgCE7MpDp3oSwQmeQ82o',
    description: 'A real time one to one video chat application with login/signup functionality using webRTC. It is built with React, Redux, Node.js, MongoDB, Express.js, and Chakra UI.',
    demoLink: 'https://video-chatt-app.netlify.app/',
    repoLink: 'https://github.com/adarrssh/Meetify'
  },
  {
    id: 1,
    title: 'Chatting App',
    image: 'https://private-user-images.githubusercontent.com/85433137/305920118-8a0faaf9-79a6-44c2-83b9-81913bb7efcd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkzOTE2ODQsIm5iZiI6MTc0OTM5MTM4NCwicGF0aCI6Ii84NTQzMzEzNy8zMDU5MjAxMTgtOGEwZmFhZjktNzlhNi00NGMyLTgzYjktODE5MTNiYjdlZmNkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA4VDE0MDMwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlmYjljOTZmOGMyYzA5NGNlNTZmYTA2NjI2MWE1NGEzNmU4MDc5YmJlZDFkNzY5MjFlNTFmN2FhMjFlNWUzMGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.TJ_LFeZvCLbrZCAbAuUU9xbzaNVlwWk2g452vF9wgD4',
    description: 'A real time chat application with login/signup, one on one and group chat functionality. It is built with React, Redux, Node.js, MongoDB, Express.js, and Chakra UI.',
    demoLink: 'https://my-chattinng-app.netlify.app/',
    repoLink: 'https://github.com/adarrssh/mern-chat-app-frontend-netlify'
  }
   
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box w={'80%'} mx="auto" p={'30px 0px'}>
      <Text fontSize="3xl" fontWeight="bold" mb="6" textAlign="center" data-aos="flip-right">
        My Projects
      </Text>
      <Flex justifyContent="center" gap={6} flexWrap="wrap">
        {projects.map((project,index) => (
          <Box
            key={project.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            cursor={'pointer'}
            className='project-card'
            _hover={{ boxShadow: 'xl' }}
            data-aos={index % 2 ==0 ?`flip-right`:`flip-left`}
            w={{ base: '100%', md: '45%', lg: '30%' }}
          >
            <Image w={'100%'} h={'200px'} src={`${project.image}`} alt={project.title} />
            <Box p="6">
              <Text fontWeight="bold" fontSize="xl" mb="2" className='project-title'>
                {project.title}
              </Text>
              <Text mb="4" className='project-description'>
                {project.description.length > 100 
                  ? `${project.description.substring(0, 100)}...` 
                  : project.description}
              </Text>
              <Box display="flex" gap={'10px'} justifyContent="space-between">
                <Link href={project.demoLink} isExternal className='project-deployed-link'>
                  <Button colorScheme="blue" rightIcon={<ExternalLinkIcon />}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.repoLink} isExternal className='project-github-link'>
                  <Button colorScheme="gray" rightIcon={<FaGithub />}>
                    View Code
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
