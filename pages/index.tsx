import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import { HomeQuery } from '@graphql/queries/home.query';
import Layout from '../layout';
import { HomeContent } from '../content/home.content';
import { SeoInterface, ProductInterface } from '../types';

type Props = {
    home: {
        seo: SeoInterface,
        products: {
            data: ProductInterface[]
        }
    }
}

export default function Home({ home }: Props) {
  return (
    <Layout seo={home.seo}>
      <HomeContent products={home.products.data} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: HomeQuery });
  return { props: { home: data.home.data.attributes } };
};
