import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import { CartQuery } from '@graphql/queries/cart.query';
import Layout from '../layout';
import { SeoInterface } from '../types';
import { CartContent } from '../content/cart.content';

type Props = {
    cart: { seo: SeoInterface }
}

export default function Cart({ cart }: Props) {
  return (
    <Layout seo={cart.seo}>
      <CartContent />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: CartQuery });
  return { props: { cart: data.cart.data.attributes } };
};
