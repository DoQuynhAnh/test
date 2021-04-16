import CategoryApi from "../api/CategoryApi";
import ProductApi from "../api/ProductApi";
import { parseRequestUrl, $ } from "../utils";

const RepairProduct = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);
    const { data: categorys } = await CategoryApi.getAll();
    return /* html */ `
    <div class="container">
    <Form class="mt-3 border p-2 col-sm-8 mx-auto" id="changeProduct" encType='multipart/form-data' >
      <h2 class="text-center">Cập nhật sản phẩm</h2>
      <div class="form-group">
        <Label for="name">Name: </Label>
        <input 
          id="exampleInputEmail1"
          key="name" 
          class="form-control"
          name="name"
          value=${product.name} />
      </div>
      <div class="form-group">
        <Label for="category">Category: </Label>
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
          value=${product.price}
        />
      </div>
      <div class="form-group">
      <Label>Add your Image: </Label>
      <div >
        <img 
        src="http://localhost:4000/api/product/photo/${product._id}"
        id="img" 
        className="img-fluid" 
        style="width: 50%;
        margin: auto;
        display: block;" />
      </div>
        <input 
          class="form-control"
          accept="image/*"
          type="file"
          name="photo"
          id="product-image"
          style="display: none"
        />

        <div class="label">
          <Label class="image-upload" for="product-image">
            <i class="fas fa-camera-retro"></i>
          Choose your Photo
        </Label>
        </div>
      </div>
      <div class="form-group">
        <Label for="exampleInputPassword1">Description</Label>
          <textarea 
          class="form-control"
          type="textarea"
          name="description"
          id="exampleText"
          key="Description"
          placeholder=${product.description}
          value=${product.description}
          ></textarea>
      </div>
      <Button type="submit" class="btn-primary btn">Submit</Button>
    </Form>
  </div>
    `;
  },

  afterRender() {
    $("#changeProduct").addEventListener("submit", (e) => {
      try {
        
        const { id } = parseRequestUrl();
        let idChangeProduct = localStorage.getItem("id")

        e.preventDefault();
        let getForm = document.querySelector("#changeProduct");
        let getDataForm = new FormData(getForm);
        ProductApi.put(id, getDataForm, idChangeProduct);
      } catch (error) {
        console.log(error);
      } finally {
        // window.location = "http://localhost:8080/#/admin";
      }
    });
  },
};

export default RepairProduct;
