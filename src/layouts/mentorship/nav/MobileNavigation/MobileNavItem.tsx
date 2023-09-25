import { Link as RouteLink } from "react-router-dom";
// chakra
import { Flex, Text, Stack } from '@chakra-ui/react';
// locales
import { useLocales } from '../../../../locales';

// ----------------------------------------------------------------------

type MobileNavItemProps = {
  label: string,
  href: string
}

const MobileNavItem = ({ label, href }: MobileNavItemProps) => {
  const { translate } = useLocales();

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={RouteLink}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color="white">
          {translate(label)}
        </Text>
      </Flex>
    </Stack>
  );
};

export default MobileNavItem;