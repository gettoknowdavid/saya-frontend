import React from 'react';
import { useStyletron } from 'baseui';
import { ActionIcon } from '@components/atoms/action-icon';
import { Logo } from '@components/atoms/logo';
import { Container } from '@components/atoms/container';
import { Block } from 'baseui/block';

export function Header() {
  const [css, theme] = useStyletron();

  return (
    <Container
      className={css({
        zIndex: '10',
        backgroundColor: theme.colors.primary,
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
        [theme.mediaQuery.small]: { height: '60px' },
        [theme.mediaQuery.medium]: { height: '70px' },
        [theme.mediaQuery.large]: { height: '80px' },
      })}
    >
      <Logo />
      <Block className={css({
        position: 'absolute',
        left: '0',
        right: '0',
      })}
      >
        <ul className={css({
          display: 'none',
          justifyContent: 'center',
          margin: '0',
          padding: '0',
        })}
        >
          <li className={css({ marginLeft: '10px', listStyle: 'none' })}> Home</li>
          <li className={css({ marginLeft: '10px', listStyle: 'none' })}>Shop</li>
          <li className={css({ marginLeft: '10px', listStyle: 'none' })}>About</li>
          <li className={css({ marginLeft: '10px', listStyle: 'none' })}>Contact</li>
        </ul>
      </Block>
      <Block>
        <ul className={css({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 0,
          margin: 0,
        })}
        >
          <ActionIcon icon="bag.png" filledIcon="bag-filled.png" />
          <ActionIcon icon="user.png" filledIcon="user-filled.png" />
        </ul>
      </Block>
    </Container>
  );
}
