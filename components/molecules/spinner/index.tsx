import React from 'react';
import { BounceLoader } from 'react-spinners';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import THEME from '../../../theme';

export function Spinner() {
  const [css, theme] = useStyletron();

  return (
    <Block className={css({
      opacity: '0.9',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      backgroundColor: theme.colors.mono1000,
      position: 'fixed',
      overflow: 'hidden',
      display: 'flex',
      zIndex: '999',
      justifyContent: 'center',
      alignItems: 'center',
    })}
    >
      <BounceLoader color={THEME.colors.accent} loading size={60} />
    </Block>
  );
}
