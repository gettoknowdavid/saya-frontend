import { Container } from '@components/atoms/container';
import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import Layout from '../layout';
import { AboutQuery } from '../graphql/queries/about.query';
import { SeoInterface } from '../types';

type Props = {
    about: { seo: SeoInterface }
}

export default function About({ about }: Props) {
  return (
    <Layout seo={about.seo}>
      <Container>
        ABOUT
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: AboutQuery });
  return { props: { about: data.about.data.attributes } };
};
