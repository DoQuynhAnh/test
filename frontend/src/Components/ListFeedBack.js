import FeedBackApi from "../api/feedBack";
import { reRender } from "../utils";

const ListFeedBack = {
  async render() {
    const { data: products } = await FeedBackApi.getAll();
    console.log(products[0]?.id);
    return /*html*/ `
    <div class="alert alert-success d-none" role="alert" id="showAlertFeed">
          This product has been deleted
        </div>
    <table class="table table-striped table-sm">
    <thead>
        <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Email</th>
            <th>Sdt</th>
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
                    <td>${product.email}</td>
                    <td>${product.sdt}</td>
                    <td>
                        <a href="#/feedback/${product.id}" 
                        class="btn btn-primary text-white" 
                        >
                            Chi tiết
                        </a>
                        <button class="btn btn-danger btn-remove" data-id="${
                          product.id
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
  afterRender() {
    const btnFeecback = document.querySelectorAll("#feedback-render .btn-remove");
    btnFeecback.forEach((element) => {
      const targetBtn = element.dataset.id;
      element.addEventListener("click", async () => {
        if (element.classList.contains("btn-remove")) {
          let ask = confirm("are you sure to delete this item!!");
          if (ask) {
            await FeedBackApi.delete(targetBtn);
            await reRender(ListFeedBack, "#feedback-render");
            document.querySelector("#showAlertFeed").classList.remove("d-none");
            setTimeout(() => {
              document.querySelector("#showAlertFeed").classList.add("d-none");
            }, 2000);
          }
        }
      });
    });
  },
};

export default ListFeedBack;
