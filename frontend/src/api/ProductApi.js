import { axiosClient } from "./axiosClient";

const ProductApi = {
  getAll(limit) {
    if (limit) {
      let url = `/products?_limit=${limit}`;
      return axiosClient.get(url);
    } else {
      let url = `/products`;
      return axiosClient.get(url);
    }
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  delete(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
  add(body) {
    const url = `/products/create`;
    return axiosClient.post(url, body);
  },
  paginate(page, limit) {
    const url = `/products?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
  getCategory(category) {
    return axiosClient.get(`products?category=${category}`);
	},
	put(id, body) {
    const url = `/product/${id}`;
    return axiosClient.put(url, body);
	},
};
export default ProductApi;
