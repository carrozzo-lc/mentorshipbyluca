// chakra
import { Box } from '@chakra-ui/react';
// components
import Hero from '../../components/common/Hero';
import CtaTextImage from '../../components/common/CtaTextImage';
// assets
import entrepeneursImg from '../../assets/entrepeneurs.svg';
import careersImg from '../../assets/careers.svg'
// components
import Seo from '../../components/common/Seo';
// locales
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

const GeneralPage = () => {
  const { translate } = useLocales();

  return (
    <>
      <Seo 
        title={translate('general_page.seo.title')}
        description={translate('general_page.seo.description')}
        type="website"
        name="@carrozzo_lc"
        url="https://www.mentorshipbyluca.com"
        siteName={translate('general_page.seo.sitename')}
      />       
      <Hero 
        title={translate('general_page.hero.title')}
        description={translate('general_page.hero.description')}
      />
      <Box py={9} />
      <CtaTextImage
        title={translate('general_page.cta_entrepeneur.title')}
        description={translate('general_page.cta_entrepeneur.description')}
        btnText={translate('general_page.cta_entrepeneur.btn_text')}
        btnRoute="/entrepeneur"
        image={entrepeneursImg}
        imageToText 
      />
      <Box py={{ base: 9, sm: 8 }} />
      <CtaTextImage
        title={translate('general_page.cta_careers.title')}
        description={translate('general_page.cta_careers.description')}
        btnText={translate('general_page.cta_careers.btn_text')}
        btnRoute="/career"
        image={careersImg}
      />
      <Box py="70px" />   
    </>
  );
}

export default GeneralPage;