//

import { ICartproduct, IProduct } from "./interface";

// global variable
export let regex: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-z0-9-]+\.[a-z]{2,4}$/;
export let phoneRegex: RegExp = /^\+?\d[\d -()]{8,}$/;
export let orderHistoryProducts: ICartproduct[] =
  JSON.parse(localStorage.getItem("orderHistoryProducts")) || [];
export let products: IProduct[];
export let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];
export let checkOutProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("checkOutProduct")) || [];
