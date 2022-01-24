import { DocumentNode, gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';
import { ProductFragment } from '@graphql/fragments/product.fragment';

export const ShopQuery: DocumentNode = gql`
    ${SeoFragment}
    ${ProductFragment}
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
        products {
            data {
                id
                attributes {
                    ...ProductFragment
                }
            }
        }
        categories {
            data {
                id
                attributes {
                    name
                    slug
                }
            }
        }
    }
`;
