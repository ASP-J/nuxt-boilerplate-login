import axiosInstance from "~/utils/axios-instance.js";

export const login = async (data) => {
  return await axiosInstance.post("/api/login", data);
};
