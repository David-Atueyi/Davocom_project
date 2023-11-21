//
// getting product from API
export const handleGetProductFromApi: Function = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    const products = data.products;
    return products;
  } catch (error) {
    console.log(error);
  }
};


export let products;

const fetchAndHandleAllProducts = async () => {
  products = await handleGetProductFromApi();
  
};

// Call the function
fetchAndHandleAllProducts();