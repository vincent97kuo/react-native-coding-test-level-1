import { all } from "redux-saga/effects";
import { catalogSaga } from "./CatalogSaga";

export default function* rootSaga() {
  yield all([
    ...catalogSaga,
  ]);
}
