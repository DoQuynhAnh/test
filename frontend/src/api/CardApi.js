import { axiosClient } from "./axiosClient";

const CardApi = {
  getAll() {
    let url = '/cards'
    return axiosClient.get(url);
  },
  addToCard(body) {
		return axiosClient.post('/cards', body)
  },
  deleteItem(id) {
    return axiosClient.delete(`/cards/${id}`)
  },
  update(id, body) {
    return axiosClient.put(`/cards/${id}`, body)
  },
  get(id) {
    return axiosClient.get(`/cards/${id}`)
  }
};

export default CardApi;
