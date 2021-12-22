import { DocumentNode, gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';

export const AccountQuery: DocumentNode = gql`
    ${SeoFragment}
    query AccountQuery {
        account {
            data {
                attributes {
                    seo {
                        ...SeoFragment
                    }
                }
            }
        }
    }
`;
