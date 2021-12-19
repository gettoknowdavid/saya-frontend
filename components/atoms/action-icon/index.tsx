import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';
import { Block, Responsive, Scale } from 'baseui/block';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
    onClick: () => unknown,
    title: string,
    icon: string,
    filledIcon: string,
    marginLeft?: Responsive<Scale>,
    marginRight?: Responsive<Scale>,
}

export function ActionIcon({
  title, onClick, icon, filledIcon, marginLeft, marginRight,
}: Props) {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const isActive = router.pathname.includes(title);

  return (
    <Block
      onClick={onClick}
      marginLeft={marginLeft}
      marginRight={marginRight}
      className={css({
        cursor: 'pointer',
        position: 'relative',
        height: '40px',
        width: '40px',
        display: 'flex',
        zIndex: '2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: isActive ? 'rgba(255,161,0,0.18)' : 'transparent',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing900,
        ':hover': {
          backgroundColor: 'rgba(255,161,0,0.18)',
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
        objectFit: 'contain',
        opacity: isActive ? '1' : '0',
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
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  filledIcon: PropTypes.string.isRequired,
  marginLeft: PropTypes.any,
  marginRight: PropTypes.any,
};

ActionIcon.defaultProps = {
  marginLeft: ['4px', '4px', '16px', '20px'],
  marginRight: '0px',
};
