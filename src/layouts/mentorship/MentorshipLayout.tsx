'use client';
// chakra
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/themes/index';
import '@/themes/styles.css';
import { Box } from '@chakra-ui/react';
// components
import Header from './Header';
import Footer from './Footer';

// ----------------------------------------------------------------------

type MentorshipLayoutProps = {
  children: React.ReactNode
};

export default function MentorshipLayout({ children }: MentorshipLayoutProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Box bg='brand.50'>
        <Header />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  );
}