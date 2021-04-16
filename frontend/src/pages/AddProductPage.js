import CategoryApi from "../api/CategoryApi";
import ProductApi from "../api/ProductApi";
import { reRender, $ } from "../utils";
import axios from "axios";

const AddProductPage = {
  async render() {
    const { data: categorys } = await CategoryApi.getAll();
    // let src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    return /*html*/ `
    <div class="container" id="add-new-page">
    <Form class="mt-3 border p-2 col-sm-8 mx-auto" id="add_new" encType='multipart/form-data' >
      <h2 class="text-center">Thêm mơi sản phẩm</h2>
      <div class="form-group">
        <Label for="name">Name: </Label>
        <input 
          id="exampleInputEmail1"
          key="name" 
          class="form-control"
          name="name"
          value="" />
      </div>
      <div class="form-group">
        <Label for="categoryInput">Category: </Label>
        <select
          class="custom-select form-control" 
          id="categoryInput"
          name="category"
          >
          <option selected>Choose...</option>
          ${categorys
            .map((ele) => {
              return /*html*/ `
            <option value=${ele._id}>${ele.name}</option>
            `;
            })
            .join("")}
        </select>
      </div>
      <div class="form-group">
        <Label for="">Price: </Label>
        <input 
          class="form-control"
          id="examplePrice"
          type="number"
          key="price"
          name="price"
        />
      </div>
      <div class="form-group">
        <Label>Add your Image: </Label>
        <div class="label">
          <Label class="image-upload" for="product-image">
            <i class="fas fa-camera-retro"></i>
          Choose your Photo
        </Label>
        </div>
        <input 
          class="form-control"
          accept="image/*"
          type="file"
          name="photo"
          id="product-image"
          style="display: none"
        />
      </div>
      <div class="form-group">
        <Label for="exampleInputPassword1">Description</Label>
        <textarea 
          class="form-control"
          type="textarea"
          name="description"
          id="exampleText"
          key="Description"
          ></textarea>
      </div>
      <Button type="submit" class="btn-primary btn">Submit</Button>
    </Form>
  </div>
        `;
  },

  afterRender() {
    try {
      let id = localStorage.getItem("id");

      $("#add_new").addEventListener("submit", (e) => {
        let get_form = document.querySelector("#add_new");
        let get_form2 = new FormData(get_form);
        e.preventDefault();
        ProductApi.add(get_form2, id);
        // window.location = "http://localhost:8080/#/admin";

      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default AddProductPage;
