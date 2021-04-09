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
  post(body) {
    const url = `/create/category`;
    return axiosClient.post(url, body);
  },
  delete(id) {
    const url = `/category/${id}`;
    return axiosClient.delete(url);
  },
  put(id, body) {
    const url = `/category/${id}`;
    return axiosClient.put(url, body);
	},
};
export default CategoryApi;
