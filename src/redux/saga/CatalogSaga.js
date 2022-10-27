import { put, takeEvery, select, call, take } from "redux-saga/effects";
import { api } from "./api/ApiHelper";
import ErrorHelper from "./api/ErrorHelper";
import { Alert } from "react-native";

//actions
import { GET_CATALOG, GET_CATALOG_DETAIL, GET_CATALOG_DETAIL_RESULT, GET_CATALOG_RESULT } from "../actions";

export const getCatalogApi = () =>
  api(
    `pokemon?limit=10`,
    "GET",
    { }
  );
const getCatalog = function* (action) {
  try {
    //show loading indicator
    // let limit = yield select((state) => state.catalog.limit);
    const response = yield call(getCatalogApi, action.refresh);
    //  console.log('_________________________', response.results)
    yield put({
      type: GET_CATALOG_RESULT,
      payload: response.results,
      refresh: action.refresh,
    });
  } catch (error) {
    //show error message
    yield call(handleError, error, action);
  }
};

export const getCatalogDetailApi = (name) =>
  api(`pokemon/${name}`, "GET", {});
const getCatalogDetail = function* (action) {
  try {
    const response = yield call(getCatalogDetailApi, action.name);
    yield put({
      type: GET_CATALOG_DETAIL_RESULT,
      payload: response,
    });
  } catch (error) {
    //show error message
    yield call(handleError, error, action);
  }
};


/**
* handle error
* @param {*} type
* @param {*} error
*/
const handleError = function* (error, action) {
    
    //show error message
    let errorMsg = ErrorHelper.checkStatus(error);
    let errorTitle = ErrorHelper.getErrorCodeTitle(error);
    if (errorTitle === "SESSIONEXPIRED") {
      //case of need refresh token
      yield* postRefreshToken(action);
      return;
    } else if (errorTitle === "INVALIDSESSION" || errorTitle === "UNAUTHORISED") {
      //logout user
      errorMsg = "Unauthorized access!";
      // errorMsg = translate("error_session_expired");
      yield put({ type: LOGOUT });
      NavigationService.resetToHome();
      // NavigationService.navigate("Welcome");
    }
  
    setTimeout(() => {
      Alert.alert(
        "Warning",
        errorMsg,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }, 600);
};

export const catalogSaga = [
  takeEvery(GET_CATALOG, getCatalog),
  takeEvery(GET_CATALOG_DETAIL, getCatalogDetail),
];
