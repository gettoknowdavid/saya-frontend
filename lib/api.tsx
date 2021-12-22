import { VariableValue } from '@apollo/client/utilities';
import { initializeApollo } from '@lib/apollo';
import { DocumentNode } from '@apollo/client';

type QueryProps = {
    query: DocumentNode,
    variables?: VariableValue,
    token?: string,
};

type MutationProps = {
    mutation: DocumentNode,
    variables?: VariableValue,
    token?: string,
};

export async function fetchAPI({ query, variables, token }: QueryProps) {
  const apollo = initializeApollo();
  // eslint-disable-next-line no-return-await
  return await apollo.query({
    query,
    variables,
    context: {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    },
  });
}

export async function postAPI({ mutation, variables, token }: MutationProps) {
  const apollo = initializeApollo();
  // eslint-disable-next-line no-return-await
  return await apollo.mutate({
    mutation,
    variables,
    context: {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    },
  });
}
