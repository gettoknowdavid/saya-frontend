import React from 'react';
import { Header } from '@components/organisms/header';
import { Drawer } from 'baseui/drawer';
import { StyledLayout, StyledLayoutBody } from './layout.styles';

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Drawer />
      <Header />
      <StyledLayoutBody>
        {children}
      </StyledLayoutBody>
    </StyledLayout>
  );
}

export default Layout;
