import { Link } from "@/navigation";
// next 
import Image, { StaticImageData } from "next/image";
// chakra
import { Container, Heading, Button, Stack, Text, SimpleGrid, Flex, Box, useBreakpointValue } from '@chakra-ui/react';

// ----------------------------------------------------------------------

type CtaTextImageProps = {
  title: string,
  description: string, 
  btnText: string, 
  btnRoute: string, 
  image: string | StaticImageData, 
  imageToText?: boolean
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

        <Stack 
          spacing={4} order={imageToText ? 2 : !isDesktop ? 2 : 1}>
          <Heading as="h2" size="xl">
            {title}
          </Heading>
          <Text as="div" fontSize={'lg'} dangerouslySetInnerHTML={{ __html: description }}/>
          <Box mt="10px">
            <Button 
              as={Link} 
              colorScheme="button" 
              size="lg"
              href={btnRoute}
            >{btnText}</Button>          
          </Box>
        </Stack>

        <Flex 
          order={imageToText ? 1 : !isDesktop ? 1 : 2 } 
          justifyContent={imageToText ? 'flex-start' : 'flex-end'}
          pr={imageToText ? { base: 0, md: 10 } : 0}
          pl={imageToText ? 0 : { base: 0, md: 10 }}
          pb={{ base: 5, md: 0 }}
        >
          <Image
            alt={'feature image'}
            src={image}
            style={{
              overflow: 'hidden',
              borderRadius: '30px'
            }}      
          />
        </Flex>

      </SimpleGrid>
    </Container>
  );
}

export default CtaTextImage;