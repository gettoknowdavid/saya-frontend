import { Container } from '@components/atoms/container';
import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import Layout from '../layout';
import { BagQuery } from '../graphql/queries/bag.query';
import { SeoInterface } from '../types';

type Props = {
    bag: { seo: SeoInterface }
}

export default function Bag({ bag }: Props) {
  return (
    <Layout seo={bag.seo}>
      <Container>
        BAG
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: BagQuery });
  return { props: { bag: data.bag.data.attributes } };
};
