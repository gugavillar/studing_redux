import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import { api } from '../../../services/api';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface StockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const isStockAvailable: AxiosResponse<StockResponse> = yield call(api.get, `/stock/${product.id}`);

  if (isStockAvailable.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}


export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])