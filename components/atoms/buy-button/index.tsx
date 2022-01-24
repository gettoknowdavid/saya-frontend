import React from 'react';
import { Button } from 'baseui/button';
import { useAppDispatch } from '@hooks/redux-hooks';
import { addToCart } from '@redux/slices/cart.slice';
import { ProductInterface } from '../../../types';

type Props = {
    product: ProductInterface
}

export function BuyButton({ product }: Props) {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => dispatch(addToCart(product))}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            paddingTop: '8px',
            paddingRight: '16px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            fontSize: $theme.typography.ParagraphXSmall.fontSize,
            fontWeight: '300',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }),
        },
      }}
    >
      Buy Now
    </Button>
  );
}
