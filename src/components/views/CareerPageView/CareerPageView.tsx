'use client';
// translations
import { useTranslations } from 'next-intl';
import { Link } from "@/navigation";
// chakra
import { Button, Container, Icon, Link as ChakraLink } from '@chakra-ui/react';
// components
import Hero from '@/components/common/Hero';
import RichTextContent from '@/components/common/RichTextContent/RichTextContent';
// icons
import { FaArrowLeft } from "react-icons/fa6";

// ----------------------------------------------------------------------

const CareerPageView = () => {
  const t = useTranslations('career_page');
  return (
    <>     
      <Hero title={t('hero.title')} />
      <Container px={{ base: '24px', md: 0 }} py={30}>
        <RichTextContent content={t.raw('content.rich_text')} />
        <Button
          as={ChakraLink} 
          colorScheme="button" 
          size="lg"
          href={t('content.calendly_link')}
          width="100%"
          mt={6}
          mb={6}
          isExternal
        >{t('content.cta_btn')}
        </Button>
        <Button
          as={Link}
          leftIcon={<Icon as={FaArrowLeft} />} 
          colorScheme='black' 
          variant='link' 
          mt={5} 
          mb={6}
          href="/"
        >{t('content.back_link')}
        </Button>         
      </Container>
    </>
  )
}

export default CareerPageView