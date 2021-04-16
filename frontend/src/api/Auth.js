import { axiosClient } from "./axiosClient";

const AuthApi = {
  dangKy(body) {
    const url = "/singup";
    return axiosClient.post(url, body);
  },
  dangNhap(body) {
    const url = "/signin";
    return axiosClient.post(url, body);
  },
  dangXuat(body) {
    const url = "/signout";
    return axiosClient.post(url, body);
  }
};

export default AuthApi;
