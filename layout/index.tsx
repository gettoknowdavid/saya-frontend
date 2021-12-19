import React from 'react';
import { Header } from '@components/organisms/header';
import { ANCHOR, Drawer } from 'baseui/drawer';
import { DrawerCloseButton } from '@components/atoms/drawer-close-button';
import { NavList } from '@components/molecules/nav-list';
import { StyledLayout, StyledLayoutBody } from './layout.styles';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { selectGlobal, toggleDrawer } from '../redux/slices/global.slice';
import { Axis } from '../enums/nav-list-axis';

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { drawerIsOpen } = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  const onClose = () => dispatch(toggleDrawer(false));

  return (
    <StyledLayout>
      <Drawer
        isOpen={drawerIsOpen}
        onClose={onClose}
        anchor={ANCHOR.right}
        overrides={{
          Root: { style: () => ({ zIndex: '4' }) },
          Close: { component: () => (<DrawerCloseButton />) },
          DrawerBody: {
            style: () => ({
              margin: '0',
              padding: '0',
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }),
          },
        }}
      >
        <NavList axis={Axis.VERTICAL} />
      </Drawer>
      <Header />
      <StyledLayoutBody>
        {children}
      </StyledLayoutBody>
    </StyledLayout>
  );
}

export default Layout;
