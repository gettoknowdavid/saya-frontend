import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useStyletron } from 'baseui';
import { Indicator } from '@atoms/indicator';
import { useRouter } from 'next/router';
import { Axis } from '@enums/nav-list-axis';
import THEME from '../../../theme';

type Props = {
    title: string,
    href: string,
    marginTop?: string,
    marginRight?: string,
    marginBottom?: string,
    marginLeft?: string,
    axis: Axis,
}

export function NavItem({
  title, href, marginTop, marginRight, marginBottom, marginLeft, axis,
}: Props) {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref>
      <li className={css({
        listStyle: 'none',
        cursor: 'pointer',
        position: 'relative',
        maxWidth: '100px',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: axis === Axis.HORIZONTAL ? '0px' : marginTop,
        marginRight: axis === Axis.VERTICAL ? '0px' : marginRight,
        marginBottom: axis === Axis.HORIZONTAL ? '0px' : marginBottom,
        marginLeft: axis === Axis.VERTICAL ? '0px' : marginLeft,
      })}
      >
        <p className={css({
          ...theme.typography.ParagraphMedium,
          fontWeight: '500',
          color: theme.colors.accent600,
          fontFamily: THEME.primaryFontFamily,
          [theme.mediaQuery.small]: { fontSize: '22px' },
          [theme.mediaQuery.medium]: { fontSize: '24px' },
          [theme.mediaQuery.large]: { fontSize: '16px' },
        })}
        >
          {title}
        </p>
        <Indicator isActive={isActive} />
      </li>
    </Link>
  );
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  axis: PropTypes.oneOf([...Object.values(Axis)]).isRequired,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
};
NavItem.defaultProps = {
  marginTop: '10px',
  marginRight: '20px',
  marginBottom: '10px',
  marginLeft: '20px',
};
