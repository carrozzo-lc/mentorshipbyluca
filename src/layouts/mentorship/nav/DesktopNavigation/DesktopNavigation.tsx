import NAV_ITEMS from '../config-navigation';
// chakra
import { Stack, Box } from '@chakra-ui/react';
// component
import DesktopNavItem from './DesktopNavItem';
// locales
import { useLocales } from '../../../../locales';

// ----------------------------------------------------------------------

const DesktopNavigation = () => {
  const { currentLang, onChangeLang } = useLocales();
  const isIta = currentLang.value === 'it' ? 'en': 'it';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <DesktopNavItem key={navItem.label} navItem={navItem} />
      ))}
      <Box>
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
      </Box>
    </Stack>
  );
};

export default DesktopNavigation;