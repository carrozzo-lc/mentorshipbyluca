import { Link as RouteLink } from "react-router-dom";
// chakra
import { Button, Link, Container, Icon } from '@chakra-ui/react';
// components
import Hero from '../../components/common/Hero';
import RichTextContent from '../../components/common/RichTextContent/RichTextContent';
import Seo from '../../components/common/Seo';
// icons
import { FaArrowLeft } from "react-icons/fa6";
// locales
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

const CareerPage = () => {
  const { translate } = useLocales();

  return (
    <>
      <Seo 
        title={translate('career_page.seo.title')}
        description={translate('career_page.seo.description')}
        type="website"
        name="@carrozzo_lc"
        url="https://www.mentorshipbyluca.com/mentorship"
        siteName={translate('career_page.seo.sitename')}
      />      
      <Hero title={translate('career_page.hero.title')} />
      <Container px={{ base: '24px', md: 0 }} py={30}>
        <RichTextContent content={translate('career_page.content.rich_text')} />
        <Button
          as={Link} 
          colorScheme="button" 
          size="lg"
          href={translate('career_page.content.calendly_link')}
          width="100%"
          mt={6}
          mb={6}
          isExternal
        >{translate('career_page.content.cta_btn')}
        </Button>
        <Button
          as={RouteLink}
          leftIcon={<Icon as={FaArrowLeft} />} 
          colorScheme='black' 
          variant='link' 
          mt={5} 
          mb={6}
          to="/"
        >{translate('career_page.content.back_link')}
        </Button>         
      </Container>
    </>
  );
}

export default CareerPage;