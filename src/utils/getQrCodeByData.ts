import axios from "axios";

export const getQrCodeByData = async (content: string) => {
  try {
    const response = await axios.get("/api/getQrCodeByData?content=" + content);
    console.log(response.status);
    // Assuming the API always sends back data in a consistent format
    if (response.status === 200) {
      return response.data; // Directly return the data if status is 200
    } else {
      // If the status is not 200, log and return the message if available
      const message = {message:response.data.message} || {message:'Unknown error occurred'};
      console.log(message);
      return message;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Check if the error is an AxiosError
      const serverResponse = error.response;
      if (serverResponse && serverResponse.data && serverResponse.data.message) {
        // If there's a specific message from the server, return it
        return {message:serverResponse.data.message};
      } else {
        // If no specific message, return a generic error message
        return {message:"An error occurred while fetching the QR code data."};
      }
    } else {
      // If the error is not from Axios, return its message directly
      const genericError = error as Error;
      return {message:genericError.message} || {message:"An unknown error occurred."};    }
  }
};