import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import { ProductQuery, ProductQueryVariable, ProductQueryVariableProps } from '@graphql/queries/product.query';
import { ProductsQuery } from '@graphql/queries/products.query';
import Layout from '../../layout';
import { ProductContent } from '../../content/product.content';
import { ProductInterface } from '../../types';

type Props = { product: ProductInterface }

function Product({ product }: Props) {
  return (
    <Layout seo={product.attributes.seo}>
      <ProductContent product={product} />
    </Layout>
  );
}

export default Product;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: { products } } = await fetchAPI({
    query: ProductQuery,
    variables: ProductQueryVariable({ params } as ProductQueryVariableProps),
  });

  return { props: { product: products.data[0] } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { products } } = await fetchAPI({ query: ProductsQuery });
  return {
    paths: products.data.map((product: ProductInterface) => ({
      params: { slug: product.attributes.slug },
    })),
    fallback: true,
  };
};
