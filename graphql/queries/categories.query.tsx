import { gql } from '@apollo/client';

export const CategoriesQuery = gql`
    query Category {
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
