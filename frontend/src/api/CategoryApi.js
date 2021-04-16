import { axiosClient } from "./axiosClient";

const CategoryApi = {
  getAll() {
    const url = `/categorys`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  post(body, userID) {
    const url = `/create/category/${userID}`;
    return axiosClient.post(url, body);
  },
  delete(id, userID) {
    const url = `/category/${id}/${userID}`;
    return axiosClient.delete(url);
  },
  put(id, body, userID) {
    const url = `/category/${id}/${userID}`;
    return axiosClient.put(url, body);
	},
};
export default CategoryApi;
