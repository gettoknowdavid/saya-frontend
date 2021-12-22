import { gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';

export const ProductFragment = gql`
    ${SeoFragment}
    fragment ProductFragment on Product {
        name
        slug
        description
        price
        author
        rating
        category {
            data {
                attributes {
                    name
                    slug
                }
            }
        }
        featuredImage {
            data {
                attributes {
                    url
                }
            }
        }
        gallery {
            data {
                id
                attributes {
                    name
                    url
                }
            }
        }
        seo {
            ...SeoFragment
        }
    }
`;
