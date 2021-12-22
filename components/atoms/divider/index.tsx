import React from 'react';
import { Block } from 'baseui/block';

export function Divider() {
  return (
    <Block width="100%" display="flex" justifyContent="center">
      <Block display="block" height="1px" width={['30%', '30%', '30%', '10%']} backgroundColor="accent" />
    </Block>
  );
}
