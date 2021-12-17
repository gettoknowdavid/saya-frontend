import React from 'react';
import { Block, Scale } from 'baseui/block';
import { Responsive } from 'baseui/theme';
import PropTypes, { string } from 'prop-types';

type Props = {
    children: React.ReactNode,
    className: string,
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
  paddingTop: PropTypes.arrayOf(string) || PropTypes.string,
  marginTop: PropTypes.arrayOf(string) || PropTypes.string,
  paddingRight: PropTypes.arrayOf(string) || PropTypes.string,
  marginRight: PropTypes.arrayOf(string) || PropTypes.string,
  paddingBottom: PropTypes.arrayOf(string) || PropTypes.string,
  marginBottom: PropTypes.arrayOf(string) || PropTypes.string,
  paddingLeft: PropTypes.arrayOf(string) || PropTypes.string,
  marginLeft: PropTypes.arrayOf(string) || PropTypes.string,
};

Container.defaultProps = {
  className: '',
  paddingTop: '10px',
  marginTop: '0px',
  paddingRight: ['10px', '10px', '20px', '40px'],
  marginRight: '0px',
  paddingBottom: '10px',
  marginBottom: '0px',
  paddingLeft: ['10px', '10px', '20px', '40px'],
  marginLeft: '0px',
};
