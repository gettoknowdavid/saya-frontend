import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';

type HorizontalProps = { width }

export function HorizontalSpacer({ width }: HorizontalProps) {
  const space = `${width}px`;
  return (
    <Block width={space} display="block" />
  );
}

HorizontalSpacer.propTypes = { width: PropTypes.any };
HorizontalSpacer.defaultProps = { width: 20 };
