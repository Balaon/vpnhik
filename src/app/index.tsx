import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from '@chakra-ui/react';
import { ThemeColorSwitcher } from '@features/theme-color-toggle';
import { RouterProvider } from 'atomic-router-react';
import { router } from './router';
import { Pages } from '@pages/index';

export const App = () => {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}>
          <Pages />
        </RouterProvider>
        <ThemeColorSwitcher />
      </ChakraProvider>
    </React.StrictMode>
  );
};
