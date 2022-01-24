import { Container } from '@atoms/container';
import { GetServerSideProps } from 'next';
import { fetchAPI } from '@lib/api';
import { AccountQuery } from '@graphql/queries/account.query';
import { getSession } from 'next-auth/react';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        source: '/account',
        destination: '/account/login',
        permanent: false,
      },
    };
  }

  const { data } = await fetchAPI({ query: AccountQuery });
  return { props: { account: data.account.data.attributes } };
};
