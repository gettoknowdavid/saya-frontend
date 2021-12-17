import React from 'react';
import { Header } from '@components/organisms/header';
import { StyledLayout, StyledLayoutBody } from './layout.styles';

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Header />
      <StyledLayoutBody>
        {children}
      </StyledLayoutBody>
    </StyledLayout>
  );
}

export default Layout;
