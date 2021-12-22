import React from 'react';
import { Block } from 'baseui/block';
import { Button, ButtonVariant } from '@atoms/button';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Container } from '@atoms/container';
import { useStyletron } from 'baseui';
import PropTypes from 'prop-types';
import { ProductCard } from '@molecules/product-card';
import {
  StyledFeaturedImage,
  StyledHeroImage,
  StyledHeroText,
  StyledHeroTextBold,
  StyledHeroTextSmall,
} from './home.content.styles';
import { ProductInterface } from '../../types';

const HeroText = () => (
  <Block display="flex" flexDirection="column">
    <StyledHeroText>
      <StyledHeroTextBold>{'Discover '}</StyledHeroTextBold>
      the
      <br />
      best
      <StyledHeroTextBold>{' furniture'}</StyledHeroTextBold>
      .
    </StyledHeroText>
    <StyledHeroTextSmall>
      Make your home beautiful
      with the best furniture sets from the Saya Store.
    </StyledHeroTextSmall>
  </Block>
);

const FeaturedImage = () => (
  <Block display="flex" flexDirection="column">
    <Block maxWidth="480px" marginTop="20px" marginBottom="10px">
      <StyledFeaturedImage src="/feature-image.jpg" alt="Featured Picture" />
    </Block>
    <Block marginTop="20px" marginBottom="20px">
      <Button marginRight="10px">Shop Now</Button>
      <Button marginLeft="10px" variant={ButtonVariant.TRANSPARENT} showBorder>Explore More</Button>
    </Block>
  </Block>
);

type Props = {
    products: Array<ProductInterface>
}

export function HomeContent({ products }: Props) {
  const [css, theme] = useStyletron();
  return (
    <Container>
      <FlexGrid flexGridColumnCount={[1, 1, 1, 2]} paddingTop="20px">
        <FlexGridItem>
          <Block display="grid" alignItems="center" height="100%" width="100%">
            <Block>
              <HeroText />
              <FeaturedImage />
            </Block>
          </Block>
        </FlexGridItem>
        <FlexGridItem>
          <Block display="flex" justifyContent="flex-end">
            <StyledHeroImage src="/home-hero-3.jpg" alt="Home Hero" />
          </Block>
        </FlexGridItem>
      </FlexGrid>
      <Block height="50px" />
      <Block paddingBottom={['20px', '20px', '30px', '50px']} className={css({ display: 'block', textAlign: 'center' })}>
        <Block marginTop="20px" marginBottom="40px">
          <p className={css({
            fontSize: '28px',
            fontWeight: '500',
            color: theme.colors.accent400,
            textAlign: 'center',
            marginBottom: '20px',
          })}
          >
            Our Products
          </p>
          <p className={css({
            fontSize: '14px',
            fontWeight: '300',
            maxWidth: '350px',
            lineHeight: '24px',
            margin: '0 auto',
            color: theme.colors.accent300,
            textAlign: 'center',
          })}
          >
            Various types of unique furniture products, minimalist and the best prices
          </p>
        </Block>
        <FlexGrid
          flexGridColumnCount={[2, 2, 3, 5]}
          flexGridColumnGap={['8px', '8px', '10px', '10px']}
          flexGridRowGap={['20px', '20px', '30px', '30px']}
          paddingBottom={['20px', '20px', '30px', '50px']}
        >
          {products.map((product:ProductInterface) => (
            <FlexGridItem key={product.id}>
              <ProductCard product={product} />
            </FlexGridItem>
          ))}
        </FlexGrid>
        <Button variant={ButtonVariant.TRANSPARENT} paddingRight="40px" paddingLeft="40px">
          View All
        </Button>
      </Block>
    </Container>
  );
}

HomeContent.propTypes = {
  products: PropTypes.array.isRequired,
};
