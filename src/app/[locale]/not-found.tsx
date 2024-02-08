'use client';
// translations
import { useTranslations } from 'next-intl';
import { Link } from "@/navigation";
// chakra
import { ChakraProvider, Heading, Box, Container, Button, Text } from '@chakra-ui/react'
import theme from '@/themes';
import '@/themes/styles.css';

// ----------------------------------------------------------------------

const NotFound = () => {
  const t = useTranslations('page_404');

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Box bg='brand.50'>
        <Container pt={14} pb={10}>
          <Heading as="h1" size="2xl" mb={5}>
            {t('title')}
          </Heading>
          <Text as="div" fontSize="xl" align="center">
            {t('content')}
          </Text>
          <Box textAlign="center" mt={6} mb={10}>
            <Button as={Link} href="/" colorScheme='black' variant='outline'>
              {t('back_link')}
            </Button>          
          </Box>
        </Container>      
      </Box>
    </ChakraProvider>
  );
};

export default NotFound;
