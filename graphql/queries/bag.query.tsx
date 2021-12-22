import { DocumentNode, gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';

export const BagQuery: DocumentNode = gql`
    ${SeoFragment}
    query BagQuery {
        bag {
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
