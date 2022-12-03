import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { RouterProvider } from 'atomic-router-react';
import { Layout } from '@features/layout';

import { theme } from '@chakra-ui/react';
import { ThemeColorSwitcher } from '@features/theme-color-toggle';
import { Provider as ScopeProvider } from 'effector-react/scope';
import { router, Pages } from './router';
import { IntlProvider } from 'react-intl';

import type { Scope } from 'effector';

interface AppProps {
  scope: Scope;
}
export const App = (props: AppProps) => {
  const { scope } = props;

  return (
    <React.StrictMode>
      <ScopeProvider value={scope}>
        <ChakraProvider theme={theme}>
          <IntlProvider locale="ru" defaultLocale="ru">
            <RouterProvider router={router}>
              <Layout menu={<ThemeColorSwitcher />}>
                <Pages />
              </Layout>
            </RouterProvider>
          </IntlProvider>
        </ChakraProvider>
      </ScopeProvider>
    </React.StrictMode>
  );
};
