import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import Image from 'next/image';

type Props = {
    icon: string,
    filledIcon: string,
    marginLeft: string,
    marginRight: string,
}

export function ActionIcon({
  icon, filledIcon, marginLeft, marginRight,
}: Props) {
  const [css, theme] = useStyletron();

  return (
    <Block
      marginLeft={marginLeft}
      marginRight={marginRight}
      className={css({
        cursor: 'pointer',
        position: 'relative',
        height: '40px',
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing900,
        ':hover': {
          backgroundColor: 'rgba(255,161,0,0.18)',
          // backgroundColor: 'rgba(109,109,109,0.1)',
        },
      })}
    >

      <Block className={css({
        opacity: '1',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
        ':hover': {
          opacity: '0',
        },
      })}
      >
        <Image
          src={`/${icon}`}
          alt="bag-icon"
          width="20"
          height="20"
        />
      </Block>
      <Block className={css({
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '99',
        objectFit: 'contain',
        opacity: '0',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
        ':hover': {
          opacity: '1',
        },
      })}
      >
        <Image
          src={`/${filledIcon}`}
          alt="bag-icon"
          width="20"
          height="20"
          className={css({ padding: '10px' })}
        />
      </Block>

    </Block>

  );
}

ActionIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  filledIcon: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
};

ActionIcon.defaultProps = {
  marginLeft: '20px',
  marginRight: '0px',
};
