import CategoryApi from "../api/CategoryApi";
import { $, reRender } from "../utils";

const CategoryList = {
  async render() {
    const { data: cate } = await CategoryApi.getAll();
    return /*html*/ `
    <div>
    <div class="btn-toolbar mb-2 mb-md-0 d-flex justify-content-end">  
		<a class="btn btn-sm btn-success text-white mb-3" href="#/add-category">
			add category
		</a>
		</div>
    <div class="table-responsive" id="table-render-category">
    <div class="alert alert-success d-none" role="alert" id="showAlertCate">
      This category has been deleted
    </div>
			<div>
			<table class="table table-striped table-sm">
				<thead>
					<tr>
						<th>STT</th>
						<th>Tên Danh Mục</th>
						<th>Action</th>
					</tr>
				</thead>
        <tbody id="category-content">
        
      ${cate.map((cate, index) => {
          return /*html*/`
              <tr>
                  <td>${index + 1}</td>
                  <td>${cate.name}</td>
                  <td><a class="btn btn-primary text-white" href="/#/sua-category/${cate._id}">Sửa</a>
                  <button class="btn del btn-danger text-white"  data-id="${cate._id}">Xóa</button>
                  </td>
              </tr>
            `
          }).join("")}
				</tbody>
			</table>
			</div>
		</div>
    </div>
		`;
  },
  async afterRender() {
    const array = document.querySelectorAll("#category-render .del");
    array.forEach((element) => {
      const BtnId = element.dataset.id;
      element.addEventListener("click", async () => {
        if (element.classList.contains("del")) {
          let ask = confirm("are you sure to delete this item!!");
          if (ask) {
            await CategoryApi.delete(BtnId);
            await reRender(CategoryList, "#category-render");
            document.querySelector("#showAlertCate").classList.remove("d-none")
            setTimeout(() => {
              $("#showAlertCate").classList.add("d-none")
            }, 2000)
          }
        }
      });
    });
  },
};

export default CategoryList;
