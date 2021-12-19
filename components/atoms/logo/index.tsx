import React from 'react';
import { useStyletron } from 'baseui';
import Link from 'next/link';
import THEME from '../../../theme';

export function Logo() {
  const [css, theme] = useStyletron();
  const mainStyle = {
    ...THEME.typography.logo,
    zIndex: '3',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transitionProperty: 'all',
    transitionDuration: theme.animation.timing700,
    ':hover': {
      color: theme.colors.accent200,
    },
  };

  return (
    <Link href="/" passHref>
      <h2 className={css(mainStyle)}>
        <span>SA</span>
        <span className={css({ color: '#FFA100' })}>Y</span>
        <span>A</span>
      </h2>
    </Link>
  );
}
