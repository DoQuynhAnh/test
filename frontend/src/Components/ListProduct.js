import { $, reRender } from "../utils";
import ProductApi from "../api/ProductApi";

const ListProduct = {
  async render() {
    const { data: products } = await ProductApi.getAll();
    return /*html*/ `
        <div class="btn-toolbar mb-2 mb-md-0 d-flex justify-content-between">  
        <h1 class="h2">Dashboard</h1>
          <a class="btn btn-sm btn-success text-white mb-3" href="#/add">
              add product
          </a>
        </div>
        <div class="alert alert-success d-none" role="alert" id="showAlert">
          This product has been deleted
        </div>
        <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>STT</th>
                <th>NAME</th>
                <th>IMG</th>
                <th>Số Tiền</th>
                <th>
                    <a href="#"></a>
                </th>
            </tr>
        </thead>
        <tbody id="product-content">
            ${products
              .map((product, index) => {
                return /*html*/ `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${product.name}</td>
                        <td><img src="http://localhost:4000/api/product/photo/${
                          product._id
                        }" width ="60px" /></td>
                        <td>${product.price}</td>
                        <td>${product.status ? "Instock" : "Outstock"}</td>
                        <td>${product.quantity}</td>
                        <td>
                            <a href="#/repair/${
                              product._id
                            }" class="btn btn-primary text-white" >
                                Sửa
                            </a>
                            <button class="btn btn-danger btn-remove" data-id="${
                              product._id
                            }">
                                Delete
                            </button>
                        </td>
                    </tr>`;
              })
              .join("")}
        </tbody>
    </table>
    `;
  },

  async afterRender() {
    const id = localStorage.getItem("id")

    const btns = $("#table-render .btn-remove");
    btns.forEach((element) => {
      const targetBtn = element.dataset.id;
      element.addEventListener("click", async () => {
        if (element.classList.contains("btn-remove")) {
          let ask = confirm("are you sure to delete this item!!");
          if (ask) {
            await ProductApi.delete(targetBtn, id);
            await reRender(ListProduct, "#table-render");
            $("#showAlert").classList.remove("d-none");
            setTimeout(() => {
              $("#showAlert").classList.add("d-none");
            }, 2000);
          }
        }
      });
    });
  },
};

export default ListProduct;
