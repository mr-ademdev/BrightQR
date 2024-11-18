import axios, { AxiosError } from "axios";

export const getQrCodeById = async (id: string) => {
  try {
    const response = await axios.get(`/api/getQrCode?id=${id}`);
    console.log(response.status);
    if (response.status === 200) {
      return response.data;
    } else {
      const message = { message: response.data.message || 'Unknown error occurred' };
      console.log(message);
      return message;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverResponse = error.response;
      if (serverResponse && serverResponse.data && serverResponse.data.message) {
        return { message: serverResponse.data.message };
      } else {
        return { message: "An error occurred while fetching the QR code." };
      }
    } else {
      const genericError = error as Error;
      return { message: genericError.message || "An unknown error occurred." };
    }
  }
};