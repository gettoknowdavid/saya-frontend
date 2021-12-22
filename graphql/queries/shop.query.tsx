import { DocumentNode, gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';

export const ShopQuery: DocumentNode = gql`
    ${SeoFragment}
    query ShopQuery {
        shop {
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
