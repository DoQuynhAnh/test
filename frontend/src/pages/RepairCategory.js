import CategoryApi from "../api/CategoryApi";
import { $, parseRequestUrl } from "../utils";
import axios from "axios";

const RepairCategory = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: items } = await CategoryApi.get(id);
    return /*html*/ `
    <div class="container">
      <form class="mt-3 border p-2 col-sm-8 mx-auto" id="repair-category">
      <h2 class="d-flex justify-content-center">Thêm mới danh mục</h2>
        <div class="form-group">
        <label for="exampleInputEmail">Tên danh mục</label>
        <input 
          type="text" 
          class="form-control" 
          id="exampleInputEmail" 
          placeholder="Tên danh mục" 
          name="name"
          value=${items.name}>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword">Mã danh mục</label>
          <input 
            class="form-control" 
            id="exampleInputPassword" 
            value=${items._id}
            disabled
            >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    <div>  
    `;
  },

  afterRender() {
    try {
      let idUserCate = localStorage.getItem("id")

      $("#repair-category").addEventListener("submit", async (e) => {
        e.preventDefault();
        const { id } = parseRequestUrl();
        let targetForm = document.querySelector("#repair-category");
        let getDataForm = new FormData(targetForm);
        await CategoryApi.put(id, getDataForm, idUserCate);
        window.location = "http://localhost:8080/#/admin";
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default RepairCategory;
