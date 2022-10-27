var ErrorHelper = {
  checkStatus: function (error) {
    // if (typeof error === "string") {
    //   return error;
    // }
    // console.log('errorerrorerror',error.response)
    if (error) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log("error = ", error);
      const errorObj = error.response;
      const errorStatus = errorObj.status;
      const errorData = errorObj.data;
      // error.response.data.message.error
      console.log("errerrorDataorObj", errorObj);
      let errorMsg;
      if (errorStatus == 401) {
        errorMsg = "Unauthorized";
      } else {
        // else if (errorStatus == 500) {
        //   errorMsg = "UNEXPECTEDERROR";
        // }
        /*
        if (errorData.errors) {
          //response format of nodejs backend
          errorMsg = errorData.errors.error;
        } else
        */
        if (errorData?.message?.hasOwnProperty("error")) {
          //response format of nodejs backend
          errorMsg = errorData?.message?.error;
        }
        // else {
        //   // else if (errorData.hasOwnProperty("code")) {
        //   //   //response format of nodejs backend
        //   //   errorMsg = errorData.code;
        //   // }
        //   //response format of php laravel backend
        //   errorMsg = JSON.stringify(errorData);
        // }
      }
      // return JSON.stringify(errorData)
      return errorMsg;
    } else {
      // Something happened in setting up the request that triggered an Error
      const errorMsg = error.message;
      if (errorMsg.indexOf("timeout") > -1) {
        //server down case
        return translate("server_maintenance");
      }
      return errorMsg;
    }
  },
  getErrorCodeTitle: function (error) {
    // if (typeof error === "string") {
    //   return error;
    // }
    if (error) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      // const errorObj = error.response;
      console.log("error->", error);
      const errorData = error;
      const errorObj = error.response;
      const errorStatus = errorObj.status;
      
      if (errorData.response) {
        //response format of nodejs backend
        return errorData.response;
      }
    }
    return "";
  },
  getErrorObj: function (error) {
    const errorObj = error.response;
    if (errorObj.data) {
      if (errorObj.data.message) {
        return errorObj.data.message;
      }
    }
    return {};
  },
};
export default ErrorHelper;
