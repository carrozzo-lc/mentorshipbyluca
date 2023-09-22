import { Link as RouteLink } from "react-router-dom";
// chakra
import { Box, Link } from '@chakra-ui/react';
// hooks
import useActiveLink from '../../../../hooks/useActiveLink';
// locales
import { useLocales } from '../../../../locales';

// ----------------------------------------------------------------------

type DesktopNavItemProps = {
  navItem:{
    label: string,
    href: string,
  }
}

const DesktopNavItem = ({ navItem }: DesktopNavItemProps) => {
  const linkColor = 'white';
  const linkHoverColor = 'brand.100';  

  const { active } = useActiveLink(navItem.href);
  const { translate } = useLocales();
  
  return(
    <Box>
      <Link
        as={RouteLink}
        p={2}
        to={navItem.href ?? '#'}
        fontSize="md"
        color={ active ? 'brand.900' : linkColor }
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
        {translate(navItem.label)}
      </Link>
    </Box>
  );
}

export default DesktopNavItem;