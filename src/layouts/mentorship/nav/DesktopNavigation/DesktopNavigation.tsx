'use client';
import { useState } from 'react';
// next-intl
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
// config
import NAV_ITEMS from '../config-navigation';
// chakra
import { Stack, Box } from '@chakra-ui/react';
// component
import DesktopNavItem from './DesktopNavItem';

// ----------------------------------------------------------------------

const DesktopNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('header');
  
  const [currentLang, setCurrentLang] = useState(locale);

  const onChangeLang = (value: any) => {
    setCurrentLang(value);
    router.replace(pathname, {locale: value});
  }

  const isIta = currentLang === 'it' ? 'en': 'it';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <DesktopNavItem key={navItem.label} navItem={navItem} />
      ))}
      <Box>
        <Box
          p={2}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          cursor={'pointer'}
          fontSize="md"
          color={ 'white' }
          _hover={{
            textDecoration: 'none',
            color: 'brand.100',
          }}
          onClick={() => onChangeLang(isIta)}
        >
          <Box as="span" textTransform={'none'} fontWeight={'normal'} fontSize="xs">{t('lang_text')}: </Box>{isIta}
        </Box>
      </Box>
    </Stack>
  );
};

export default DesktopNavigation;