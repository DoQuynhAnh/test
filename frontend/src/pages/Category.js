import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils";
const Category = {
  async render() {
		const { id } = parseRequestUrl();
		console.log(id);
		const { data: products } = await ProductApi.getCategory(id);
		console.log(products);
    return /*html*/`
		<div class="container " >

		<div class="list-container mt-4">
			<div class="row service mt-4">
			${products
        .map(
          (item) => /*html*/`
          <div class="col-md-6 col-lg-3 col-sm-6 col-xs-6 item-frames">
						<div class="item-game-wrapper">
								<a href="#">
										<div class="img">
												<img class="check_img_errs"
														src="${item.image}">
										</div>
								</a>
								<div class="item-info">
										<a href="#">
												<div class="item-title">
														${item.name}
												</div>
										</a>

										<div class="item-price">
												<span class="cur-p">${item.price}đ</span>
										</div>

										<div class="item-btn-a">
												<a href="#">
														<i class="fas fa-shopping-cart "></i>
												</a>
										</div>

										<a href="#/products/${item.id}" class="item-btn" style="margin-top: 10px">Mua
												ngay</a>
								</div>
						</div>
					</div>
				`
        )
        .join("")}
			</div>
		</div>
	</div>
        `;
  },
};
export default Category;
