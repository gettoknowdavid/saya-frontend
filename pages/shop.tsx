import { Container } from '@atoms/container';
import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import { ShopQuery } from '@graphql/queries/shop.query';
import Layout from '../layout';
import { SeoInterface } from '../types';

type Props = {
    shop: { seo: SeoInterface }
}

export default function Shop({ shop }: Props) {
  return (
    <Layout seo={shop.seo}>
      <Container>
        SHOP
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: ShopQuery });
  return { props: { shop: data.shop.data.attributes } };
};
