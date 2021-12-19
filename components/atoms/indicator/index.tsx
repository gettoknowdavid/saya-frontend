import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';

type Props = {
    isActive: boolean
}

export function Indicator({ isActive }: Props) {
  const [css, theme] = useStyletron();

  return (
    <Block className={css({
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '99',
      opacity: isActive ? '1' : '0',
      paddingBottom: '7px',
      transitionProperty: 'all',
      transitionDuration: theme.animation.timing700,
      ':hover': { opacity: '1' },
    })}
    >
      <Block className={css({
        position: 'relative',
        height: '4px',
        width: '13px',
        borderRadius: '50px',
        // backgroundColor: theme.colors.accent500,
        backgroundColor: 'rgba(255,161,0)',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
      })}
      />
    </Block>
  );
}

Indicator.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
