import { gql } from '@apollo/client';
import { ProductFragment } from '@graphql/fragments/product.fragment';

export const ProductsByCategoryQuery = gql`
    ${ProductFragment}
    query ProductByCategoryQuery($category: String) {
        products(filters: {category: {slug: {eq: $category}}}) {
            data {
                id
                attributes {
                    ...ProductFragment
                }
            }
        }
    }
`;

export type ProductsByCategoryVariableProps = { params: { category: string } };

export const ProductsByCategoryVariable = ({ params }: ProductsByCategoryVariableProps) => ({
  category: params.category,
});
