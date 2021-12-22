import { DocumentNode, gql } from '@apollo/client';

export const GlobalQuery: DocumentNode = gql`
    query GlobalQuery {
        global {
            data {
                attributes {
                    siteName
                    metaTitle
                    metaDescription
                    favicon {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
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
            }
        }
    }
`;
