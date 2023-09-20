import { Link as RouteLink } from "react-router-dom";
// chakra
import { Image, Container, Heading, Button, Stack, Text, SimpleGrid, Flex, Box, useBreakpointValue } from '@chakra-ui/react';

// ----------------------------------------------------------------------

type CtaTextImageProps = {
  title: string,
  description: string, 
  btnText: string, 
  btnRoute: string, 
  image: string, 
  imageToText: boolean
}

const CtaTextImage = ({ title, description, btnText, btnRoute, image, imageToText }: CtaTextImageProps) => {
  
  const isDesktop = useBreakpointValue(
    {
      base: false,
      md: true,
    }
  )

  return (
    <Container maxW={'990px'} px={{ base: 8, lg: 0 }}>
      <SimpleGrid 
        columns={{ base: 1, md: 2 }} 
        spacing={2} 
        justifyContent={'space-between'}
        alignItems={'center'}
        textAlign={{ base: 'center', md: 'left' }}
      >

        <Stack spacing={4} order={imageToText ? 2 : !isDesktop ? 2 : 1}>
          <Heading as="h2" size="xl">
            {title}
          </Heading>
          <Text fontSize={'lg'}>
            {description}
          </Text>
          <Box mt="10px">
            <Button 
              as={RouteLink} 
              colorScheme="button" 
              size="lg"
              to={btnRoute}
            >{btnText}</Button>          
          </Box>
        </Stack>

        <Flex 
          order={imageToText ? 1 : !isDesktop ? 1 : 2 } 
          justifyContent={imageToText ? 'flex-start' : 'flex-end'}
        >
          <Image
            alt={'feature image'}
            src={image}
            objectFit={'cover'}
            margin={{ base: 'auto', md: 'inherit' }}
            maxWidth={{ base: '240px', md: '340px' }}
            mb={{ base: 2, md: 0 }}
          />
        </Flex>

      </SimpleGrid>
    </Container>
  );
}

export default CtaTextImage;