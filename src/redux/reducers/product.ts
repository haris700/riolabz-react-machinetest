import { Action } from "../../utils/types";
import {
  GET_PRODUCT,
  LIST_PRODUCT,
  LIST_PRODUCT_BY_CATEGORY,
  LIST_PRODUCT_CATEGORIES,
  PAGINATE_PRODUCTS,
  SEARCH_PRODUCTS,
} from "../actions/type";

const initialState = {
  loading: false,
  products: [],
  productCopy: [],
  productDetails: {},
  productCategories: [],
  offset: 0,
};

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LIST_PRODUCT:
      return {
        ...state,
        productCopy: [...action.payload.products],
      };
    case GET_PRODUCT:
      return {
        ...state,
        productDetails: action.payload.product,
      };
    case LIST_PRODUCT_CATEGORIES:
      return {
        ...state,
        productCategories: [...action.payload.categories],
      };
    case LIST_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productCopy: [...action.payload.products],
      };

    case SEARCH_PRODUCTS:
      const result = state.productCopy.filter((item: any) => {
        return item.title
          .toLowerCase()
          .includes(action.payload.keyword.toLowerCase());
      });
      console.log(result, "result");
      return {
        ...state,
        products: result,
      };
    case PAGINATE_PRODUCTS:
      const offset = action.payload.offset;
      const limit = action.payload.limit;
      console.log(state.productCopy, "fbdjfbgj");
      const data = state.productCopy.slice(limit, offset);
      console.log(data, "result");
      return {
        ...state,
        products: data,
      };
    default:
      return {
        ...state,
      };
  }
};

export { productsReducer };
