export interface SeoInterface {
    metaTitle: string,
    metaDescription: string,
    preventIndexing: boolean,
    isProduct: boolean,
    shareImage: {
        alt: string,
        media: {
            data: {
                attributes: {
                    url: string,
                }
            }
        }
    }
}
