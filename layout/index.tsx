import React from 'react';
import { Header } from '@organisms/header';
import { Drawer } from 'baseui/drawer';
import Seo from '@lib/seo';
import PropTypes from 'prop-types';
import { Footer } from '@organisms/footer';
import { StyledLayout, StyledLayoutBody } from './layout.styles';
import { SeoInterface } from '../types';

type LayoutProps = {
    children: React.ReactNode;
    seo: SeoInterface,
}

function Layout({ children, seo }: LayoutProps) {
  return (
    <StyledLayout>
      <Seo seo={seo} />
      <Drawer />
      <Header />
      <StyledLayoutBody>
        {children}
      </StyledLayoutBody>
      <Footer />
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.object.isRequired,
};

export default Layout;
