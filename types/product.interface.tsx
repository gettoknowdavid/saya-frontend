import { SeoInterface } from './seo.interface';
import { CategoryInterface } from './category.interface';

export interface ProductInterface {
    id: number,
    attributes: {
        name: string,
        slug: string,
        description: string,
        price: number,
        author: string,
        rating: number,
        category: CategoryInterface,
        featuredImage: {
            data: {
                attributes: {
                    url: string,
                }
            }
        },
        gallery: {
            data: {
                id: string,
                attributes: {
                    name: string,
                    url: string
                }
            }[]
        }
        seo: SeoInterface,
    }
}
