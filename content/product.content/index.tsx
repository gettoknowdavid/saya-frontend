import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@atoms/container';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { BackArrow } from '@atoms/back-arrow';
import { HorizontalSpacer } from '@atoms/spacer';
import { currency } from '@utils/currency-formatter';
import { BuyButton } from '@atoms/buy-button';
import { QuantityCounter } from '@molecules/quantity-counter';
import { decreaseItemQuantity, increaseItemQuantity, selectCart } from '@redux/slices/cart.slice';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { changeImage, selectProductImage } from '@redux/slices/product-image.slice';
import { StyledProductDetailItem, StyledProductDetailTitle, StyledProductImage } from './product.content.styles';
import { ProductInterface } from '../../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = { product: ProductInterface }

export function ProductContent({ product }: Props) {
  const [css, theme] = useStyletron();
  const dispatch = useAppDispatch();
  const STRAPI_URL = `${process.env.NEXT_PUBLIC_API}`;

  const { items } = useAppSelector(selectCart);
  const { currentImage } = useAppSelector(selectProductImage);
  const item = items.find((i) => i.attributes.slug === product.attributes.slug);
  const quantity = item?.quantity;

  React.useEffect(() => {
    dispatch(changeImage(`${STRAPI_URL}${product.attributes.featuredImage.data.attributes.url}`));
  }, [STRAPI_URL, dispatch, product.attributes.featuredImage.data.attributes.url]);

  return (
    <Container paddingTop={['60px', '60px', '70px', '80px']}>
      <BackArrow />
      <FlexGrid flexGridColumnCount={[1, 1, 1, 3]}>
        <FlexGridItem maxWidth={['100%', '100%', '100%', '30%']} height="100%">
          <Block paddingTop="50px">
            <h1 className={css({
              marginTop: '0',
              fontFamily: 'Bodoni MT',
              fontSize: '50px',
            })}
            >
              {product.attributes.name}
            </h1>
            <Block>
              <StyledProductDetailTitle>Description:</StyledProductDetailTitle>
              <StyledProductDetailItem>{product.attributes.description}</StyledProductDetailItem>
            </Block>
            <Block className={css({
              borderTop: `1px solid ${theme.colors.mono500}`,
              borderBottom: `1px solid ${theme.colors.mono500}`,
              paddingTop: '10px',
              paddingBottom: '10px',
              marginTop: '20px',
              marginBottom: '20px',
            })}
            >
              <Block display="flex" alignItems="center">
                <StyledProductDetailTitle>Author:</StyledProductDetailTitle>
                <HorizontalSpacer />
                <StyledProductDetailItem>{product.attributes.author}</StyledProductDetailItem>
              </Block>
              <Block display="flex" alignItems="center">
                <StyledProductDetailTitle>Rating:</StyledProductDetailTitle>
                <HorizontalSpacer />
                <StyledProductDetailItem>
                  {product.attributes.rating.toString()}
                </StyledProductDetailItem>
              </Block>
            </Block>
          </Block>
        </FlexGridItem>
        <FlexGridItem maxWidth={['100%', '100%', '100%', '40%']} height="100%">
          <StyledProductImage src={currentImage} alt={product.attributes.name} />
        </FlexGridItem>
        <FlexGridItem maxWidth={['100%', '100%', '100%', '30%']}>
          <Block
            position="relative"
            className={css({
              display: 'block',
              overflowX: 'hidden',
              overflowY: 'hidden',
              minHeight: '100%',
            })}
          >
            <Block>
              <StyledProductDetailTitle>Price:</StyledProductDetailTitle>
              <h2 className={css({
                marginTop: '0px',
                fontFamily: theme.typography.HeadingLarge.fontFamily,
                fontSize: theme.typography.HeadingLarge.fontSize,
              })}
              >
                {currency.format(product.attributes.price)}
              </h2>
            </Block>
            <Block display="flex" alignItems="center">
              <BuyButton product={product} />
              <HorizontalSpacer />
              <QuantityCounter
                quantity={quantity}
                onDecrease={() => dispatch(decreaseItemQuantity(product))}
                onIncrease={() => dispatch(increaseItemQuantity(product))}
              />
            </Block>
            <Block>
              <FlexGrid
                flexGridColumnCount={[
                  product.attributes.gallery.data.length,
                  product.attributes.gallery.data.length,
                  product.attributes.gallery.data.length,
                  2,
                ]}
                flexGridRowGap="20px"
                flexGridColumnGap="20px"
                marginTop="30px"
                marginBottom="30px"
                maxHeight="300px"
                maxWidth={['100%', '100%', '100%', '200px']}
              >
                {product.attributes.gallery.data.map((image) => (
                  <FlexGridItem key={image.id} display="block" backgroundColor="mono400">
                    <Block
                      className={css({ cursor: 'pointer' })}
                      onClick={() => dispatch(changeImage(`${STRAPI_URL}${image.attributes.url}`))}
                    >
                      <StyledProductImage src={`${STRAPI_URL}${image.attributes.url}`} alt={image.attributes.name} />
                    </Block>
                  </FlexGridItem>
                ))}
              </FlexGrid>
            </Block>
          </Block>
        </FlexGridItem>
      </FlexGrid>
    </Container>
  );
}

ProductContent.propTypes = {
  product: PropTypes.object.isRequired,
};
