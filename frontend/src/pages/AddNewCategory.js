import CategoryApi from "../api/CategoryApi";
import { $ } from "../utils.js";
import axios from "axios";

const AddNewCategory = {
  render() {
    return /*html*/ `
    <div class="container">
      <form class="mt-3 border p-2 col-sm-8 mx-auto" id="add_category" encType='multipart/form-data' >
      <h2 class="d-flex justify-content-center">Thêm mới danh mục</h2>
        <div class="form-group">
        <label for="exampleInputEmail1">Tên danh mục</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên danh mục">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    <div>  
    `;
  },
  afterRender() {
    try {
      // let create_axios = () => {
      //   return axios.create({
      //     baseURL: "http://localhost:4000/api",
      //     headers: {
      //       "Content-Type": "application/form-data",
      //     },
      //   });
      // };

      document
        .querySelector("#add_category")
        .addEventListener("submit", async (e) => {
          let targetFormCategory = document.querySelector("#add_category");
          let getDataFormCategory = new FormData(targetFormCategory);
          e.preventDefault();
          let name = $("#exampleInputEmail1").value;
          // create_axios().post("/create/category", name);
          CategoryApi.post(name);
          // window.location = "http://localhost:8080/#/admin";
        });
    } catch (error) {
      console.log(error);
    }
  },
};

export default AddNewCategory;
