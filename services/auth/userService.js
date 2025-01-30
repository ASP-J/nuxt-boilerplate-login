import axiosInstance from "~/utils/axios-instance.js";

export const getMe = async () => {
  return await axiosInstance.get("/api/me").then((response) => response.data);
};
