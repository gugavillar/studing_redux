import { all } from 'redux-saga/effects';
import cart from './cart/saga';

export function* rootSaga() {
  yield all([
    cart
  ])
}