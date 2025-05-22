'use client';
// translations
import { useTranslations } from 'next-intl';
// chakra
import { Box, Heading } from '@chakra-ui/react';
// components
import Hero from "@/components/common/Hero";
import CtaTextImage from '@/components//common/CtaTextImage';
// assets
import entrepeneursImg from '../../../assets/entrepeneurs.jpg';
import careersImg from '../../../assets/careers.jpg'

// ----------------------------------------------------------------------

const HomePageView = () => {
  const t = useTranslations('general_page');
  return (
    <>
      <Hero 
        title={t('hero.title')}
        description={t.raw('hero.description')}
        block={      
          <Box 
            rounded="xl"
            p="4"
            color="gray.800"
            borderColor="brand.900"
            borderWidth={2}
            borderRadius={10}
            sx={{ 
              background: "white", 
              margin: "auto",
              marginTop:"28px",
              maxWidth: '990px',
              marginBottom: "-16px",
              width: "100%" 
            }}
          >
            <Heading as="h3" textAlign="center" fontSize={24} mb={['10px', '0px']}>{t('hero.socialCta')}</Heading>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
              src="//lightwidget.com/widgets/6a60e6310c0f5d8b9e4b04e5287df5e7.html"
              scrolling="no"
              allowTransparency={true}
              title="Instagram Feed"
              className="lightwidget-widget"
              style={{ width: '100%', border: 0, overflow: 'hidden' }}
            ></iframe>
          </Box> 
        }
      />
      <Box py={9} />
      <CtaTextImage
        title={t('cta_entrepeneur.title')}
        description={t.raw('cta_entrepeneur.description')}
        btnText={t('cta_entrepeneur.btn_text')}
        btnRoute="/entrepeneur"
        image={entrepeneursImg}
        imageToText 
      />
      <Box py={{ base: 9, sm: 10 }} />
      <CtaTextImage
        title={t('cta_careers.title')}
        description={t.raw('cta_careers.description')}
        btnText={t('cta_careers.btn_text')}
        btnRoute="/career"
        image={careersImg}
      />
      <Box py="70px" />        
    </>
  )
}

export default HomePageView;