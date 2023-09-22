import NAV_ITEMS from '../config-navigation';
// chakra
import { Stack, Flex, Box } from '@chakra-ui/react';
// components
import MobileNavItem from './MobileNavItem';
// locales
import { useLocales } from '../../../../locales';

// ----------------------------------------------------------------------

const MobileNavigation = () => {
  const { currentLang, onChangeLang } = useLocales();
  const isIta = currentLang.value === 'it' ? 'en': 'it';

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
              onClick={() => onChangeLang(`${isIta}`)}
            >
              {isIta}
            </Box>
        </Flex>
      </Stack>      
    </Stack>
  );
};

export default MobileNavigation;