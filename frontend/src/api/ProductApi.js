import { axiosClient } from "./axiosClient";

const ProductApi = {
  getAll(limit, id) {
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
  delete(id, idUser) {
    const url = `/product/${id}/${idUser}`;
    return axiosClient.delete(url);
  },
  add(body, idUser) {
    const url = `/products/create/${idUser}`;
    return axiosClient.post(url, body);
  },
  put(id, body, idUser) {
    const url = `/product/${id}/${idUser}`;
    return axiosClient.put(url, body);
  },
  paginate(page, limit) {
    const url = `/products?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
  getCategory(category) {
    return axiosClient.get(`products?category=${category}`);
	},
};
export default ProductApi;
