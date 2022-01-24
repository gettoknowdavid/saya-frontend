import React from 'react';
import { Block } from 'baseui/block';
import { Button, ButtonVariant } from '@atoms/button';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Container } from '@atoms/container';
import { useStyletron } from 'baseui';
import PropTypes from 'prop-types';
import { ProductCard } from '@molecules/product-card';
import { VerticalSpacer } from '@atoms/spacer';
import { NewFeatureItem } from '@molecules/new-feature-item';
import {
  StyledFeaturedImage,
  StyledHeroImage,
  StyledHeroText,
  StyledHeroTextBold,
  StyledHeroTextSmall,
  StyledNewFeatureImage,
  StyledSectionHeader,
} from './home.content.styles';
import { ProductInterface } from '../../types';

type Props = { products: Array<ProductInterface> }

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
    <Block maxWidth={['100%', '100%', '100%', '480px']} marginTop="20px" marginBottom="10px">
      <StyledFeaturedImage src="/feature-image.jpg" alt="Featured Picture" />
    </Block>
    <Block marginTop="20px" marginBottom="20px">
      <Button marginRight="10px">Shop Now</Button>
      <Button marginLeft="10px" variant={ButtonVariant.TRANSPARENT} showBorder>Explore More</Button>
    </Block>
  </Block>
);

export function HomeContent({ products }: Props) {
  const [css, theme] = useStyletron();
  return (
    <Block>
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
      </Container>
      <VerticalSpacer height={50} />
      <Container
        className={css({ backgroundColor: 'white' })}
        paddingTop={['30px', '30px', '40px', '80px']}
        paddingBottom={['30px', '30px', '40px', '80px']}
      >
        <FlexGrid flexGridColumnCount={[1, 1, 1, 2]}>
          <FlexGridItem>
            <Block
              height="56px"
              display="flex"
              justifyContent={['center', 'center', 'center', 'flex-start']}
              alignItems="center"
            >
              <StyledSectionHeader>New Features</StyledSectionHeader>
              <Block
                height="2px"
                width="200px"
                display={['none', 'none', 'none', 'flex']}
                backgroundColor="accent300"
                marginLeft="30px"
              />
            </Block>
            <VerticalSpacer height={40} />
            <NewFeatureItem
              number="01"
              title="The Best Price"
              description="The best prices we provide is in accordance with the quality and and quantity of furniture we provide."
            />
            <NewFeatureItem
              number="02"
              title="Unique Style"
              description="A unique and different style from other furniture gives a luxurious and minimalist impression."
            />
            <NewFeatureItem
              number="03"
              title="Premium Quality"
              description="Premium quality that makes the Saya furniture more elegant and durable to use."
            />

          </FlexGridItem>
          <FlexGridItem>
            <Block maxHeight={['300px', '300px', '500px', '520px']} height="100%">
              <StyledNewFeatureImage src="/home-hero-3.jpg" alt="Home Hero" />
            </Block>
          </FlexGridItem>
        </FlexGrid>
      </Container>
      <Container>
        <Block
          paddingBottom={['20px', '30px', '40px', '50px']}
          className={css({ display: 'block', textAlign: 'center' })}
        >
          <Block marginTop="20px" marginBottom="40px">
            <VerticalSpacer />
            <StyledSectionHeader>Our Products</StyledSectionHeader>
            <VerticalSpacer />
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
            {products.map((product: ProductInterface) => (
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
    </Block>
  );
}

HomeContent.propTypes = {
  products: PropTypes.array.isRequired,
};
