import React from 'react';
import { useStyletron } from 'baseui';
import Link from 'next/link';
import THEME from '../../../theme';

export function Logo() {
  const [css, theme] = useStyletron();

  return (
    <Link href="/" passHref>
      <h2 className={css({
        ...THEME.typography.logo,
        cursor: 'pointer',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
        ':hover': {
          color: theme.colors.accent200,
        },
      })}
      >
        SAYA
      </h2>
    </Link>
  );
}
