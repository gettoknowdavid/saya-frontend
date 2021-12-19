import React from 'react';
import { NavItem } from '@components/atoms/nav-item';
import { useStyletron } from 'baseui';
import PropTypes from 'prop-types';
import { Axis } from '../../../enums/nav-list-axis';

type Props = {
    axis?: Axis
}

export function NavList({ axis }: Props) {
  const [css] = useStyletron();

  return (
    <ul className={css({
      display: 'flex',
      flexDirection: axis === Axis.HORIZONTAL ? 'row' : 'column',
      justifyContent: 'center',
      margin: '0',
      padding: '0',
    })}
    >
      <NavItem axis={axis} href="/" title="Home" />
      <NavItem axis={axis} href="/shop" title="Shop" />
      <NavItem axis={axis} href="/about" title="About" />
      <NavItem axis={axis} href="/contact" title="Contact" />
    </ul>
  );
}

NavList.propTypes = {
  axis: PropTypes.oneOf([...Object.values(Axis)]),
};

NavList.defaultProps = {
  axis: Axis.HORIZONTAL,
};
