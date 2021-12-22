import { gql } from '@apollo/client';

export const SeoFragment = gql`
    fragment SeoFragment on ComponentSharedSeo {
        metaTitle
        metaDescription
        preventIndexing
        isProduct
        shareImage {
            alt
            media {
                data {
                    attributes {
                        url
                    }
                }
            }
        }
    }
`;
