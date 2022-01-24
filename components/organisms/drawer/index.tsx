import React from 'react';
import { ANCHOR, Drawer as BaseDrawer } from 'baseui/drawer';
import { Axis } from '@enums/nav-list-axis';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { selectGlobal, toggleDrawer } from '@redux/slices/global.slice';
import { DrawerCloseButton } from '@atoms/drawer-close-button';
import { NavList } from '@molecules/nav-list';

export function Drawer() {
  const { drawerIsOpen } = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  const onClose = () => dispatch(toggleDrawer(false));

  return (
    <BaseDrawer
      isOpen={drawerIsOpen}
      onClose={onClose}
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: '1000000' }) },
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
    </BaseDrawer>
  );
}
