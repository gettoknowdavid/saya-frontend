import { DocumentNode, gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';

export const ContactQuery: DocumentNode = gql`
    ${SeoFragment}
    query ContactQuery {
        contact {
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
