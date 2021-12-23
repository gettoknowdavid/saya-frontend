import { Container } from '@atoms/container';
import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import { ContactQuery } from '@graphql/queries/contact.query';
import Layout from '../layout';
import { SeoInterface } from '../types';

type Props = {
    contact: { seo: SeoInterface }
}

export default function Contact({ contact }: Props) {
  return (
    <Layout seo={contact.seo}>
      <Container>
        CONTACT
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: ContactQuery });
  return { props: { contact: data.contact.data.attributes } };
};
