import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { Product } from "../store/modules/cart/types";

interface ProductItem {
  product: Product
}


export function CatalogItem({ product }: ProductItem) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  - "}
      <button type="button" onClick={handleAddProductToCart}>Comprar</button>
    </article>
  )
}