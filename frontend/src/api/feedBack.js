import { axiosClient } from "./axiosClient";

const FeedBackApi = {
  post(body) {
    const url = `/feedback`;
    return axiosClient.post(url, body);
  },
  getAll() {
    const url = `/feedback`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/feedback/${id}`;
    return axiosClient.get(url);
  },
  delete(id) {
    const url = `/feedback/${id}`;
    return axiosClient.delete(url);
  },
};

export default FeedBackApi
