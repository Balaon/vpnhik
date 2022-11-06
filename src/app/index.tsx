import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { RouterProvider } from 'atomic-router-react';
import { Layout } from '@features/layout';

import { theme } from '@chakra-ui/react';
import { ThemeColorSwitcher } from '@features/theme-color-toggle';
import { Provider as ScopeProvider } from 'effector-react/scope';
import { fork } from 'effector';
import { router, Pages } from './router';

export const App = () => {
  const scope = fork();

  return (
    <React.StrictMode>
      <ScopeProvider value={scope}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router}>
            <Layout menu={<ThemeColorSwitcher />}>
              <Pages />
            </Layout>
          </RouterProvider>
        </ChakraProvider>
      </ScopeProvider>
    </React.StrictMode>
  );
};
