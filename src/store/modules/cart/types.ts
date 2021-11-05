export interface Product {
  id: number;
  title: string;
  price: number;
}

interface ICartItem {
  product: Product;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}