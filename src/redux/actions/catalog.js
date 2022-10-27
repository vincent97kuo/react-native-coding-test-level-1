export const GET_CATALOG = "CATALOG/GET_CATALOG";
export const GET_CATALOG_RESULT = "CATALOG/GET_CATALOG_RESULT";

export const GET_CATALOG_DETAIL = "CATALOG/GET_CATALOG_DETAIL";
export const GET_CATALOG_DETAIL_RESULT = "CATALOG/GET_CATALOG_DETAIL_RESULT";

export const getCatalog = (refresh = false) => {
  return {
    type: GET_CATALOG,
    refresh,
  };
};

export const getCatalogDetail = (name) => {
  return {
    type: GET_CATALOG_DETAIL,
    name,
  };
};