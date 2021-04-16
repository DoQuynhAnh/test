import ProductApi from "../api/ProductApi";
const ProductsPage = {
  async render() {
    const { data: products } = await ProductApi.getAll();
    return /*html*/ `
		<div class="container " >

		<div class="list-container">
			<div class="row service mt-4">
			${products
        .map(
          (item) => /*html*/ `
					<div class="col-md-6 col-lg-3 col-sm-6 col-xs-6 item-frames">
						<div class="item-game-wrapper">
								<a href="#">
									<div class="img">
										<img class="check_img_errs"
                    src="http://localhost:4000/api/product/photo/${item._id}">
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

                  <a 
                    href="#/products/${item.id}" 
                    class="item-btn" 
                    style="margin-top: 10px">
                    Mua ngay
                  </a>
								</div>
						</div>
					</div>
				`
        )
        .join("")}
			</div>
    </div>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="/" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="/">1</a></li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="/">2 <span class="sr-only">(current)</span></a>
        </li>
        <li class="page-item"><a class="page-link" href="/">3</a></li>
        <li class="page-item">
          <a class="page-link" href="/">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  `;
  },
};
export default ProductsPage;
