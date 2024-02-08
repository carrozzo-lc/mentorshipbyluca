'use client';
// next-intl
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { useState } from 'react';
// config
import NAV_ITEMS from '../config-navigation';
// chakra
import { Stack, Flex, Box } from '@chakra-ui/react';
// components
import MobileNavItem from './MobileNavItem';

// ----------------------------------------------------------------------

const MobileNavigation = () => {
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
    <Stack
      bg="brand.300"
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Stack spacing={4} onClick={() => onChangeLang(`${isIta}`)}>
        <Flex
          py={2}
          as={Box}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
            <Box
              p={0}
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
        </Flex>
      </Stack>      
    </Stack>
  );
};

export default MobileNavigation;