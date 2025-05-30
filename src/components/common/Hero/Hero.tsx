// chakra
import { Heading, Button, Box, Text } from '@chakra-ui/react'

// ----------------------------------------------------------------------

type HeroProps = {
  title: string,
  description?: string,
  scrollButton?: boolean
  block?: any;
}

const Hero = ({ title, description, scrollButton, block }: HeroProps) => {
  return (
    <Box 
      bg='brand.500' 
      color='white' 
      pt={{ base: 42, sm: 62 }} 
      pb={{ base: '50px', sm: '60px' }} 
      px={{ base: '24px' }}
    >
      <Box sx={{ maxWidth: 600, textAlign: 'center', margin: 'auto' }}>
        <Heading as="h1" size="xl">{title}</Heading>
        {description && <Text
          as="div"
          fontSize='lg' 
          mt="16px"
          sx={{
            'p': {
              mb: '12px'
            }
          }}
          dangerouslySetInnerHTML={{ __html: description }}/>
        }
        {scrollButton && (
          <Button variant='outline' sx={{ 
            color: 'white',
            borderColor: 'white',
            minWidth: 220,
            mt: '24px',
            '&:hover': {
              color: 'gray.700',
              backgroundColor: 'white'
            }
          }}>
            Get help now
          </Button>        
        )}
      </Box>
      {block && block}     
    </Box>
  );
}

export default Hero;