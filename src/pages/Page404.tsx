import { Link as RouteLink } from "react-router-dom";
// chakra
import { ChakraProvider, Heading, Box, Container, Image, Button, Text } from '@chakra-ui/react'
import theme from '../themes';
import '../themes/styles.css';
// icons
import Logo from '../assets/lucacarrozzo-logo.svg';
// locales
import { useLocales } from '../locales';

const Page404 = () => {
  const { translate } = useLocales();

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Box bg='brand.50'>
        <Container p={10}>
          <Box margin="auto" width="132px" mb={5}>
            <Image
              htmlWidth="132px"
              htmlHeight="60px"
              objectFit='fill'          
              src={Logo}
            />
          </Box>
          <Heading as="h1" size="2xl" mb={5}>
            {translate('page_404.title')}
          </Heading>
          <Text as="div" fontSize="xl" align="center">
            {translate('page_404.content')}
          </Text>
          <Box textAlign="center" mt={6} mb={10}>
            <Button as={RouteLink} to="/" colorScheme='black' variant='outline'>
              {translate('page_404.back_link')}
            </Button>          
          </Box>
        </Container>      
      </Box>
    </ChakraProvider>  
  );
}

export default Page404;