import CardApi from "../api/CardApi";
import ProductApi from "../api/ProductApi";
import { $, reRender } from "../utils";

const ViewCartPage = {
  async render() {
    let data = JSON.parse(localStorage.getItem("cart"));

    return /*html*/ `
    <div class="container mt-4" id="carts-reRender">
    <h2 class="thanh-toan-title">Giỏ Hàng: </h2>
    <span class="count-san-pham">(${data.length} sản phẩm)</span>
    <div class="container-card">
    <div class="alert alert-success d-none" role="alert" id="showAlertCart">
      This cart has been deleted
    </div>
    ${data
      .map((ele) => {
        return /*html*/ `
      <div class="card-detail mx-0 row my-1" id="update-carts"> 
      <div class="item d-flex col-md-12"> 
        <div class="col-md-3"><a href="#"><img src=${
          ele.image
        } alt=""></a></div>
          <div class="col-md-3">
            <a href="#" class="title">${ele.name}</a> <br>
            <div class="">Tình trạng: <span class="con-hang">${
              ele.status ? "Còn hàng" : "Hết hàng"
            }</span></div>
            <div class="text-danger font-weight-bold delete-item" id=${
              ele.id
            }>Xoá</div>
          </div>
        <div class="text-right col-md-2"><span class="price">${
          ele.price
        } VNĐ</span><br></div>
        <div class="col-6">
          <div class="form-group d-flex w-100">
          <label for=${ele.id} class="pr-3">Số Lượng :</label>
            <div class="d-flex">
              <input type="number" class="form-control-custom border-0" min="1" id=${
                ele.id
              } value=${ele.count}>
              <button class="btn btn-primary uu" data-id=${ele.id}>
                Cập nhật
              </button>
          </div>
        </div>
        </div>
        </div>
    </div>
      `;
      })
      .join("")}
    </div>
    <div class="d-flex justify-content-center w-100">
    <button 
      class="btn-success btn"
      data-toggle="modal" 
      data-target="#exampleModal">
      Check out
    </button>
    </div>
    </div>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Xác nhận đơn hàng</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
      </div>

    `;
  },
  async afterRender() {
    const removeBtn = document.querySelectorAll(".delete-item");
    const btnUpdateCarts = document.querySelectorAll("#update-carts .uu");

    removeBtn.forEach((item) => {
      item.addEventListener("click", async () => {
        const targetBtn = item.id;
        if (item.classList.contains("delete-item")) {
          $;
          let ask = confirm("are you sure to delete this item!!");
          if (ask) {
            let data = JSON.parse(localStorage.getItem("cart"));
            let newData = data.filter((o) => o.id != targetBtn);
            localStorage.setItem("cart", JSON.stringify(newData));
            await reRender(ViewCartPage, "#carts-reRender");
            $("#showAlertCart").classList.remove("d-none");
            setTimeout(() => {
              $("#showAlertCart").classList.add("d-none");
            }, 2000);
          }
        }
      });
    });

    // update cart

    btnUpdateCarts.forEach((a) => {
      const id = a.dataset.id;
      let arr = JSON.parse(localStorage.getItem("cart"));
      a.addEventListener("click", async () => {
        let indexCart = await arr.map((ele) => ele.id).indexOf(id);
        const newCount = document.querySelector(`.form-group #${id}`).value;
        arr[indexCart].count = newCount;
        console.log(arr[indexCart]);
        localStorage.setItem("cart", JSON.stringify(arr));
        await reRender(ViewCartPage, "#list-cart");
      });
    });
  },
};

export default ViewCartPage;
