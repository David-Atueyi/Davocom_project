// interface for a user
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
// interface for a user Phone And Address
export interface IUserPhoneAndAddress {
  phone: string;
  address: string;
}
//
// interface for searchedProduct
export interface ISearchedProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ICartproduct {
  productId: number;
  image: string;
  nameOfProduct: string;
  productPrice: number;
  productColor: string;
  productStock: number;
  quantityOfProduct: number;
  fromCart: boolean;
}
