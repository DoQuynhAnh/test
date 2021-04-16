import { axiosClient } from "./axiosClient";

const UserApi = {
  get(id) {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },
  // dangKy(body) {
  //   const url = "/signin";
  //   return axiosClient.post(url, body);
  // },
  // dangKy(body) {
  //   const url = "/signout";
  //   return axiosClient.post(url, body);
  // },
};

export default UserApi;
