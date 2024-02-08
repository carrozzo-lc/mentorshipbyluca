'use client';
// translations
import { usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
// chakra
import { Box, Heading, HStack, Button, Circle, Icon } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react'
// icons
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";
// components
import MentorBlock from '@/components/common/MentorBlock/MentorBlock';

// ----------------------------------------------------------------------

const Footer = () => {
  const pathname = usePathname();
  const t = useTranslations('footer');

  return(
    <Box 
      bg="brand.900" 
      pb={12} 
      px={{ base: '12px', md: '24px' }}
      pt={pathname !== '/' ? 46 : 0}
    >
      <Box position="relative" top={pathname === '/' ? '-50px' : 'inherit'} >

        {pathname === '/' && <MentorBlock />}

        <Box color="white" textAlign="center">
          <Heading 
            as="div" 
            size="lg" 
            maxWidth={600} 
            margin="auto"
            pt={pathname === '/' ? 46 : 0} 
          >
            {t('cta_message')}
          </Heading>
          <HStack 
            spacing='24px' 
            maxWidth={210} 
            margin="auto" 
            mt={30}
            align='center'
            justifyContent={'center'}
          >
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={ChakraLink} href="https://www.linkedin.com/in/lucacarrozzo/?locale=en_US" target="_blank" isExternal>
              <Icon as={FaLinkedinIn} />
            </Circle>
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={ChakraLink} href="https://twitter.com/carrozzo_lc" target="_blank" isExternal>
              <Icon as={FaTwitter} />
            </Circle>
            <Circle w='50px' h='50px' border='2px' borderColor='white' as={ChakraLink} href="https://github.com/carrozzo-lc" target="_blank" isExternal>
              <Icon as={FaGithub} />
            </Circle>
          </HStack>
          <Button
            as={ChakraLink}
            leftIcon={<EmailIcon />} 
            variant='solid' 
            sx={{ background: 'white' }}
            href="mailto:me@lucacarrozzo.com"
            mt="24px"
            isExternal
          >me@lucacarrozzo.com
          </Button> 
        </Box>

      </Box>         
    </Box>
  )
};

export default Footer;