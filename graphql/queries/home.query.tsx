import { DocumentNode, gql } from '@apollo/client';
import { SeoFragment } from '@graphql/fragments/seo.fragment';
import { ProductFragment } from '@graphql/fragments/product.fragment';

export const HomeQuery: DocumentNode = gql`
    ${SeoFragment}
    ${ProductFragment}
    query HomeQuery {
        home {
            data {
                attributes {
                    seo {
                        ...SeoFragment
                    }
                    products {
                        data {
                            id
                            attributes {
                                ...ProductFragment
                            }
                        }
                    }
                }
            }
        }
    }

`;
