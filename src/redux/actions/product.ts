import { Dispatch } from "redux";
import { Category, Product } from "../../utils/types";
import {
  GET_PRODUCT,
  LIST_PRODUCT,
  LIST_PRODUCT_BY_CATEGORY,
  LIST_PRODUCT_CATEGORIES,
  PAGINATE_PRODUCTS,
  SEARCH_PRODUCTS,
} from "./type";
import axios from "axios";

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res: any) => {
        console.log(res);
        dispatch(listProduct(res.data));
        dispatch(paginateProducts(3, 0));
      })
      .catch((err) => {});
  };
};

export const fetchProduct = (id: string) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res: any) => {
        console.log(res);
        dispatch(getProduct(res.data));
      })
      .catch((err) => {});
  };
};

export const fetchProductCategories = () => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((res: any) => {
        console.log(res, "cate");
        dispatch(productCategories(res.data));
      })
      .catch((err) => {});
  };
};

export const fetchProductsByCategory = (category: string) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res: any) => {
        console.log(res, "cate");
        dispatch(listProductByCategory(res.data));
        dispatch(paginateProducts(3, 0));
      })
      .catch((err) => {});
  };
};

const listProduct = (products: Product[]) => {
  return {
    type: LIST_PRODUCT,
    payload: {
      products,
    },
  };
};

const getProduct = (product: Product) => {
  return {
    type: GET_PRODUCT,
    payload: {
      product,
    },
  };
};

const productCategories = (categories: string[]) => {
  return {
    type: LIST_PRODUCT_CATEGORIES,
    payload: {
      categories,
    },
  };
};

const listProductByCategory = (products: Product[]) => {
  return {
    type: LIST_PRODUCT_BY_CATEGORY,
    payload: {
      products,
    },
  };
};

export const searchProducts = (keyword: string) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      keyword,
    },
  };
};

export const paginateProducts = (offset: number, limit: number) => {
  return {
    type: PAGINATE_PRODUCTS,
    payload: {
      offset,
      limit,
    },
  };
};
