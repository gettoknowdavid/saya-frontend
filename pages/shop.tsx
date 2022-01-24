import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import { ShopQuery } from '@graphql/queries/shop.query';
import PropTypes from 'prop-types';
import Layout from '../layout';
import { CategoryInterface, ProductInterface, SeoInterface } from '../types';
import { ShopContent } from '../content/shop.content';

type Props = {
    shop: {
        seo: SeoInterface,
        products: ProductInterface[],
        categories: CategoryInterface[],
    }
}

export default function Shop({ shop }: Props) {
  return (
    <Layout seo={shop.seo}>
      <ShopContent shop={shop} />
    </Layout>
  );
}

Shop.propTypes = {
  shop: PropTypes.object.isRequired,
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: ShopQuery });
  return {
    props: {
      shop: {
        seo: data.shop.data.attributes.seo,
        products: data.products.data,
        categories: data.categories.data,
      },
    },
  };
};
