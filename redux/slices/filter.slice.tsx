import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@redux/store';
import { PriceSort } from '@enums/price-sort.enum';
import { fetchAPI } from '@lib/api';
import {
  ProductsByCategoryQuery,
  ProductsByCategoryVariable,
  ProductsByCategoryVariableProps,
} from '@graphql/queries/products-by-category.query';
import { ProductsQuery } from '@graphql/queries/products.query';
import { CategoryInterface, ProductInterface } from '../../types';

interface FilterState {
    products: ProductInterface[],
    filteredProducts: ProductInterface[],
    sort: {
        price: PriceSort
    },
    category: CategoryInterface,
}

export const AllCategory = {
  id: '0',
  attributes: {
    name: 'All',
    slug: 'all',
  },
};

const initialState = {
  products: [],
  filteredProducts: [],
  category: AllCategory,
  sort: null,
} as FilterState;

const priceSort = (field, products) => {
  switch (field) {
    case PriceSort.ASCENDING:
      return products.sort((a, b) => ((a.attributes.price > b.attributes.price) ? 1 : -1));
    case PriceSort.DESCENDING:
      return products.sort((a, b) => ((a.attributes.price > b.attributes.price) ? -1 : 1));
    default:
      return products;
  }
};

export const categoryFilter = createAsyncThunk(
  'filter/CATEGORY_FILTER_ACTION',
  async (category: CategoryInterface) => {
    const { slug } = category.attributes;
    const isAll = category.id === '0';
    if (isAll) {
      const { data } = await fetchAPI({ query: ProductsQuery });
      return { products: data.products.data, category };
    }

    const { data } = await fetchAPI({
      query: ProductsByCategoryQuery,
      variables: ProductsByCategoryVariable({
        params: { category: slug },
      } as ProductsByCategoryVariableProps),
    });
    return { products: data.products.data, category };
  },
);

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(categoryFilter.fulfilled, (state, action) => ({
      ...state,
      category: action.payload.category,
      filteredProducts: action.payload.products,
    }));
  },
});

// export const { } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filterRepo;

export default filterSlice.reducer;
