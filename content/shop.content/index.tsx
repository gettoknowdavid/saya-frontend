import React from 'react';
import { Container } from '@atoms/container';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { ProductCard } from '@molecules/product-card';
import { Block } from 'baseui/block';
import { Tab, Tabs } from 'baseui/tabs-motion';
import { VerticalSpacer } from '@atoms/spacer';
import PropTypes from 'prop-types';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { AllCategory, categoryFilter, selectFilter } from '@redux/slices/filter.slice';
import { CategoryInterface, ProductInterface } from '../../types';
import { StyledSectionHeader } from '../home.content/home.content.styles';
import { ShopContentsStatefulTabOverrides, ShopContentTabOverrides } from './shop.content.styles';

type Props = {
    shop: {
        products: ProductInterface[],
        categories: CategoryInterface[]
    }
}

export function ShopContent({ shop }: Props) {
  const dispatch = useAppDispatch();
  const { category, filteredProducts } = useAppSelector(selectFilter);
  const newCategories = [AllCategory, ...shop.categories];

  React.useEffect(() => {
    dispatch(categoryFilter(AllCategory));
  }, []);

  return (
    <Container paddingTop={['60px', '70px', '80px', '100px']}>
      <Block>
        <StyledSectionHeader>Our Products</StyledSectionHeader>
        <VerticalSpacer height={30} />
      </Block>
      <Tabs
        activeKey={category.id}
        activateOnFocus
        overrides={ShopContentsStatefulTabOverrides}
        onChange={(params) => {
          dispatch(categoryFilter(
            newCategories.find((nC) => nC.id.toString() === params.activeKey),
          ));
        }}
      >
        {newCategories.map((cat) => (
          <Tab
            overrides={ShopContentTabOverrides}
            key={cat.id}
            title={cat.attributes.name}
          >
            <FlexGrid
              flexGridColumnCount={[2, 2, 3, 5]}
              flexGridColumnGap={['8px', '8px', '10px', '10px']}
              flexGridRowGap={['20px', '20px', '30px', '30px']}
              paddingBottom={['20px', '20px', '30px', '50px']}
            >
              {filteredProducts.map((product: ProductInterface) => (
                <FlexGridItem key={product.id}>
                  <ProductCard product={product} />
                </FlexGridItem>
              ))}
            </FlexGrid>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
}

ShopContent.propTypes = {
  shop: PropTypes.object.isRequired,
};
