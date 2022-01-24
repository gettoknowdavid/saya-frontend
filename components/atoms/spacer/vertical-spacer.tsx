import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';

type VerticalProps = { height }

export function VerticalSpacer({ height }: VerticalProps) {
  const space = `${height}px`;
  return (
    <Block height={space} display="block" />
  );
}

VerticalSpacer.propTypes = { height: PropTypes.any };
VerticalSpacer.defaultProps = { height: 20 };
