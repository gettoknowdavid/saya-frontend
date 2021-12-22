import { DocumentNode, gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';

export const AboutQuery: DocumentNode = gql`
    ${SeoFragment}
    query AboutQuery {
        about {
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
