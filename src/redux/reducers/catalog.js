import { GET_CATALOG, GET_CATALOG_DETAIL_RESULT, GET_CATALOG_RESULT } from "../actions";
  
  const INITIAL_STATE = {
    fetching: false,
  
    list: [],
    detail: {},
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_CATALOG:
        return {
            ...state,
            fetching: true,
            list: action.refresh ? [] : (state.list || []),
        };
        case GET_CATALOG_RESULT:
            let result = state.list;
            result = action.payload;
            return {
                ...state,
                list: result,
                fetching: false,
                done: action.payload.length < state.length
                    ? true
                    : false
            };
        case GET_CATALOG_DETAIL_RESULT:
            return {
                ...state,
                detail: action.payload,
            }
      default:
        return state;
    }
  };
  