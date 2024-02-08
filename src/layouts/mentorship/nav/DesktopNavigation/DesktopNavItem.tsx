'use client';
import { Link } from '@/navigation';
// chakra
import { Box } from '@chakra-ui/react';
// hooks
import useActiveLink from '@/hooks/useActiveLink';
// translations
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

type DesktopNavItemProps = {
  navItem:{
    label: string,
    href: string,
  }
}

const DesktopNavItem = ({ navItem }: DesktopNavItemProps) => {
  const t = useTranslations('navigation');
  
  const linkColor = 'white';
  const linkHoverColor = 'brand.100';  

  const { active } = useActiveLink(navItem.href);
  
  return(
    <Box 
      p={2} 
      fontSize="md" 
      color={ active ? 'brand.900' : linkColor }
      _hover={{
        textDecoration: 'none',
        color: linkHoverColor,
      }}      
    >
      <Link href={navItem.href ?? '#'}>
        {t(navItem.label)}
      </Link>
    </Box>
  );
}

export default DesktopNavItem;