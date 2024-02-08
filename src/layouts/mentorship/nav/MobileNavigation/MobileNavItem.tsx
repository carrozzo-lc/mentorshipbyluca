'use client';
import { Link } from '@chakra-ui/next-js';
// chakra
import { Flex, Text, Stack } from '@chakra-ui/react';
// translations
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

type MobileNavItemProps = {
  label: string,
  href: string
}

const MobileNavItem = ({ label, href }: MobileNavItemProps) => {
  const t = useTranslations('navigation');

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color="white">
          {t(label)}
        </Text>
      </Flex>
    </Stack>
  );
};

export default MobileNavItem;