import axios from "axios";

export function* api(
  requestURL,
  requestMethod = "GET",
  data = {},
  fullUrl = false,
) {
  const instance = axios.create();
  // instance.defaults.headers.common["User-Agent"] = "";
  global.axios = instance;

  const domain = `https://pokeapi.co/api/v2/`;

  let contentType = "json";
  
  requestURL = (fullUrl ? '' : domain) + requestURL;

//   headers = {
//     accept: "json",
//     "Content-Type": contentType,
//   };

  let postData = {
    method: requestMethod,
    url: requestURL,
    // headers,
    data,
    timeout: 60000,
  };
  if (requestMethod === "GET") {
    postData = {
      method: requestMethod,
      url: requestURL,
    //   headers,
      params: data,
      timeout: 20000,
    };
  }
  console.log("requestURL", requestURL);
  console.log("postData", postData);
  return yield axios(postData)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response == undefined) {
        throw {
          response: {
            data: {
              code: "UNEXPECTEDERROR",
              message: {
                error: "Unexpected error encountered. " + error.message,
              },
            },
          },
        };
      }
      throw error;
    });
}
