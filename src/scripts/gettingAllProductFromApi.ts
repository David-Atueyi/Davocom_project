//

import { IProduct } from "./interface";

// getting product from API
export const handleGetProductFromApi = async ():Promise<IProduct[]> => {
  try {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    const products = data.products;
    return products;
  } catch (error) {
    console.log(error);
  }
};

