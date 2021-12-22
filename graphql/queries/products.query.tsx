import { gql } from '@apollo/client';
import { ProductFragment } from '@graphql/fragments/product.fragment';

export const ProductsQuery = gql`
    ${ProductFragment}
    query ProductsQuery {
        products {
            data {
                attributes {
                    ...ProductFragment
                }
            }
        }
    }
`;
