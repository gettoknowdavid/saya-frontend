import { Container } from '@components/atoms/container';
import { GetStaticProps } from 'next';
import { fetchAPI } from '@lib/api';
import Layout from '../../layout';
import { SeoInterface } from '../../types';
import { AccountQuery } from '../../graphql/queries/account.query';

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
