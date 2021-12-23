import { Container } from '@atoms/container';
import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import { AccountQuery } from '@graphql/queries/account.query';
import Layout from '../../layout';
import { SeoInterface } from '../../types';

type Props = {
    account: { seo: SeoInterface }
}

export default function Account({ account }: Props) {
  return (
    <Layout seo={account.seo}>
      <Container>
        ACCOUNT
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchAPI({ query: AccountQuery });
  return { props: { account: data.account.data.attributes } };
};
