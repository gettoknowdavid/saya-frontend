import React from 'react';
import { Block, Scale } from 'baseui/block';
import { Responsive } from 'baseui/theme';
import PropTypes from 'prop-types';

type Props = {
    children: React.ReactNode,
    className: string,
    height?: Responsive<Scale>,
    paddingTop?: Responsive<Scale>,
    marginTop?: Responsive<Scale>,
    paddingRight?: Responsive<Scale>,
    marginRight?: Responsive<Scale>,
    paddingBottom?: Responsive<Scale>,
    marginBottom?: Responsive<Scale>,
    paddingLeft?: Responsive<Scale>,
    marginLeft?: Responsive<Scale>,
}

export function Container({
  children,
  className,
  height,
  paddingTop,
  marginTop,
  paddingRight,
  marginRight,
  paddingBottom,
  marginBottom,
  paddingLeft,
  marginLeft,
}: Props) {
  return (
    <Block
      height={height}
      position="relative"
      paddingTop={paddingTop}
      marginTop={marginTop}
      paddingRight={paddingRight}
      marginRight={marginRight}
      paddingBottom={paddingBottom}
      marginBottom={marginBottom}
      paddingLeft={paddingLeft}
      marginLeft={marginLeft}
      className={className}
    >
      {children}
    </Block>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  height: PropTypes.any,
  paddingTop: PropTypes.any,
  marginTop: PropTypes.any,
  paddingRight: PropTypes.any,
  marginRight: PropTypes.any,
  paddingBottom: PropTypes.any,
  marginBottom: PropTypes.any,
  paddingLeft: PropTypes.any,
  marginLeft: PropTypes.any,
};

Container.defaultProps = {
  className: '',
  height: '',
  paddingTop: '10px',
  marginTop: '0px',
  paddingRight: ['10px', '10px', '20px', '40px'],
  marginRight: '0px',
  paddingBottom: '10px',
  marginBottom: '0px',
  paddingLeft: ['10px', '10px', '20px', '40px'],
  marginLeft: '0px',
};
