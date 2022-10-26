import { type } from "os";

export interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface Category {
  title: string;
}
