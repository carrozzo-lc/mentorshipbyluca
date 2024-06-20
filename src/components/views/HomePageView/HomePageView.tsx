'use client';
// translations
import { useTranslations } from 'next-intl';
// chakra
import { Box } from '@chakra-ui/react';
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
      />
      <Box py={9} />
      <CtaTextImage
        title={t('cta_entrepeneur.title')}
        description={t('cta_entrepeneur.description')}
        btnText={t('cta_entrepeneur.btn_text')}
        btnRoute="/entrepeneur"
        image={entrepeneursImg}
        imageToText 
      />
      <Box py={{ base: 9, sm: 10 }} />
      <CtaTextImage
        title={t('cta_careers.title')}
        description={t('cta_careers.description')}
        btnText={t('cta_careers.btn_text')}
        btnRoute="/career"
        image={careersImg}
      />
      <Box py="70px" />        
    </>
  )
}

export default HomePageView;