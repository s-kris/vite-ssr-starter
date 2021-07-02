import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

export { PageLayout };

type Children = React.ReactNode;

function PageLayout({ children }: { children: Children }) {
  return (
    <ChakraProvider>
      <React.StrictMode>{children}</React.StrictMode>
    </ChakraProvider>
  );
}
