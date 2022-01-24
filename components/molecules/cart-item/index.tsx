import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';
import { HorizontalSpacer } from '@atoms/spacer';
import { ParagraphSmall, ParagraphXSmall } from 'baseui/typography';
import { QuantityCounter } from '@molecules/quantity-counter';
import { currency } from '@utils/currency-formatter';
import Image from 'next/image';
import { useStyletron } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useAppDispatch } from '@hooks/redux-hooks';
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '@redux/slices/cart.slice';
import { StyledCartItemImage } from '@molecules/cart-item/cart-item.styles';
import Link from 'next/link';
import { STRAPI_URL } from '../../../constants/strapi-url';
import { CartProductInterface } from '../../../types/cart-product.interface';

type Props = { item: CartProductInterface }

export function CartItem({ item }: Props) {
  const [css, theme] = useStyletron();
  const dispatch = useAppDispatch();

  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 1, 2]}
      flexGridRowGap={['16px', '16px', '16px', '0px']}
      className={css({
        padding: '12px',
        marginBottom: '24px',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.mono100,
        boxShadow: 'rgba(149, 157, 165, 0.17) 0px 8px 24px',
        position: 'relative',
      })}
    >
      <FlexGridItem maxWidth={['100%', '100%', '100%', '64%']}>
        <Block display="flex" alignItems="center">
          <StyledCartItemImage
            src={`${STRAPI_URL}${item.attributes.featuredImage.data.attributes.url}`}
            alt={item.attributes.name}
          />
          <HorizontalSpacer />
          <Block>
            <Link href={`/products/${item.attributes.slug}`} passHref>
              <ParagraphSmall className={css({
                marginTop: '0',
                marginBottom: '0',
                cursor: 'pointer',
                ':hover': { textDecoration: 'underline' },
              })}
              >
                {item.attributes.name}
              </ParagraphSmall>
            </Link>
            <ParagraphXSmall className={css({
              marginTop: '4px',
              marginBottom: '0',
              color: theme.colors.mono600,
              fontSize: '11px',
              lineHeight: '11px',
              fontWeight: '300',
            })}
            >
              {item.attributes.category.data.attributes.name}
            </ParagraphXSmall>
          </Block>
        </Block>
      </FlexGridItem>
      <FlexGridItem maxWidth={['100%', '100%', '100%', '36%']}>
        <Block display="flex" alignItems="center">
          <QuantityCounter
            forCart
            quantity={item.quantity}
            onDecrease={() => dispatch(decreaseItemQuantity(item))}
            onIncrease={() => dispatch(increaseItemQuantity(item))}
          />
          <HorizontalSpacer />
          <ParagraphSmall className={css({
            marginTop: '0',
            marginBottom: '0',
            fontWeight: '600',
            width: '90px',
            textAlign: 'right',
          })}
          >
            {currency.format(item.attributes.price)}
          </ParagraphSmall>
          <HorizontalSpacer />
          <Block
            onClick={() => dispatch(removeFromCart(item))}
            className={css({
              cursor: 'pointer',
              position: 'absolute',
              zIndex: '9',
              right: '20px',
            })}
          >
            <Image src="/close.png" height="16px" width="16px" alt="Close Icon" />
          </Block>
          <HorizontalSpacer width={10} />
        </Block>
      </FlexGridItem>
    </FlexGrid>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};
