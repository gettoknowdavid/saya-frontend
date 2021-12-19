import React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import Image from 'next/image';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { toggleDrawer } from '../../../redux/slices/global.slice';

export function DrawerCloseButton() {
  const [css, theme] = useStyletron();
  const dispatch = useAppDispatch();

  return (
    <Block
      onClick={() => dispatch(toggleDrawer(false))}
      className={css({
        height: '30px',
        width: '30px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '50%',
        alignItems: 'center',
        position: 'absolute',
        top: '14px',
        right: '14px',
        cursor: 'pointer',
        backgroundColor: 'rgba(255,161,0,0.2)',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
        ':hover': { backgroundColor: 'rgba(255,161,0,0.3)' },
      })}
    >
      <Image src="/close.png" alt="Close Drawer Icon" height="16px" width="16px" />
    </Block>
  );
}
