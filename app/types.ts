import { ReactNode } from "react";

export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};
export type ProductsType = ProductType[];

export type CategoryType = {
  name: string;
  icon: ReactNode;
  slug: string;
};
export type CategoriesType = CategoryType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
export type CartItemsType = CartItemType[];
