import React from 'react';
import { useStyletron } from 'baseui';
import { ActionIcon } from '@atoms/action-icon';
import { Logo } from '@atoms/logo';
import { Block } from 'baseui/block';
import { NavList } from '@molecules/nav-list';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { selectGlobal, toggleDrawer } from '@redux/slices/global.slice';

export function Header() {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const push = (href: string) => router.push(href);
  const dispatch = useAppDispatch();
  const { drawerIsOpen } = useAppSelector(selectGlobal);

  return (
    <Block
      height={['60px', '60px', '70px', '80px']}
      paddingRight={['10px', '10px', '20px', '80px']}
      paddingLeft={['10px', '10px', '20px', '80px']}
      className={css({
        position: 'absolute',
        left: '0',
        right: '0',
        margin: '0, auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
      })}
    >
      <Logo />
      <Block className={css({
        position: 'absolute',
        zIndex: '2',
        left: '0',
        right: '0',
        margin: '0, auto',
        [theme.mediaQuery.small]: { display: 'none' },
        [theme.mediaQuery.medium]: { display: 'none' },
        [theme.mediaQuery.large]: { display: 'block' },
      })}
      >
        <NavList />
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
          <ActionIcon
            title="bag"
            onClick={() => push('/bag')}
            icon="bag.png"
            filledIcon="bag-filled.png"
          />
          <ActionIcon
            title="account"
            onClick={() => push('/account')}
            icon="user.png"
            filledIcon="user-filled.png"
          />
          <Block display={['flex', 'flex', 'flex', 'none']}>
            <ActionIcon
              title="drawer"
              onClick={() => dispatch(toggleDrawer(!drawerIsOpen))}
              icon="menu.png"
              filledIcon="menu-filled.png"
            />
          </Block>
        </ul>
      </Block>
    </Block>
  );
}
