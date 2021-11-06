import { ActionType, Product } from "./types";

export function addProductToCartRequest(product: Product) {
  return {
    type: ActionType.addProductToCartRequest,
    payload: {
      product
    }
  }
}

export function addProductToCartSuccess(product: Product) {
  return {
    type: ActionType.addProductToCartSuccess,
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionType.addProductToCartFailure,
    payload: {
      productId
    }
  }
}