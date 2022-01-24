import { gql } from '@apollo/client';
import { ProductFragment } from '@graphql/fragments/product.fragment';

export const ProductQuery = gql`
    ${ProductFragment}
    query ProductQuery($slug: String!) {
        products(filters: { slug: { eq: $slug } }) {
            data {
                id
                attributes {
                    ...ProductFragment
                }
            }
        }
    }
`;

export type ProductQueryVariableProps = {
    params: {
        slug: string
    }
}

export const ProductQueryVariable = ({ params }: ProductQueryVariableProps) => ({
  slug: params.slug,
});
