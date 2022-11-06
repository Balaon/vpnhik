// import { Flex } from '@shared/ui'

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  menu: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { menu, children } = props;
  return (
    <div>
      {menu}
      <div>{children}</div>
    </div>
  );
};
