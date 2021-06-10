import CardApi from "../api/CardApi";
import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils";

const ProductDetail = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);
    let idUser = localStorage.getItem("id");
    return /*html*/ `
	<div class="container product-detail">
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
			<li class="breadcrumb-item active" aria-current="page">${product.name}</li>
		</ol>
	</nav>

	<div class="container-title">
		<div class="fontSize-title">${product.name}</div>
	</div>

	<div class="container-product-detail">
		<div class="row">
			<div class="col-lg-6">
				<img 
					class="img-fluid w-100" 
					src="http://localhost:4000/api/product/photo/${product._id}"
					alt=""
					>
			</div>

			<div class="col-lg-6">
				<div class="sp-info">
					<div class="sp-info-top ">
						<div class="sp-info-top-item ">
							<div class="sp-info-top-item-icon"><img style="width: 20px;"
									src="https://divineshop.vn/assets/resources/tags.png"></div>
							<div class="text-wrap">
								<div class="text">Mã sản phẩm</div>
								<div class="text-1">cdkey ${product._id}</div>
							</div>

						</div>
						<div class="sp-info-top-item ">
							<div class="sp-info-top-item-icon"><img style="width: 20px;"
									src="https://divineshop.vn/assets/resources/item-icon-2.png"></div>
							<div class="text-wrap">
								<div class="text">Tình trạng</div>
								<span style="color:#53af2e; font-weight:bold;">Còn hàng</span>
							</div>
						</div>
						<div class="sp-info-top-item ">
							<div class="sp-info-top-item-icon"><img style="width: 35px;"
									src="https://divineshop.vn/assets/resources/item-icon-3.png"></div>
							<div class="text-wrap">
								<div class="text">Link gốc</div>
								<div class="text-1">Sản phẩm</div>
							</div>
						</div>
					</div>

					<div class="sp-price-text">Giá sản phẩm</div>
					<div class="sp-price-new">
						<div class="price">${product.price} VNĐ</div>
						<div class="price-info">&nbsp;&nbsp;
							<a style="color: #928e8e" href="#" id="promotion-request"
								alt="Thông báo cho tôi khi có giá tốt hơn"
								title="Thông báo cho tôi khi có giá tốt hơn"><i class="fas fa-bell"></i><b> Chuông
									báo giảm giá</b></a>
						</div>
					</div>

					<form>
						<hr>
						<div class="row w-100">
							<div class="col-xs-6 col-md-6 p-sm-1">
								<a href="#" class="btn btn-green">Mua Ngay</a>
							</div>
							<div class="col-xs-6 col-md-6 p-sm-1">

								${
                  idUser !== null
                    ? `<a  class="btn btn-orange handleAdd" id=${product._id}>
												<i class="fa fa-shopping-cart text-left"> </i> &nbsp;Thêm vào giỏ </a>`
                    : ""
                }

								
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="container">
			<h3 class="my-3">Thông tin sản phẩm</h3>
			${product.description}
		</div>
		</div>
	</div>
	`;
  },
  async afterRender() {
    const btnAdd = $(".handleAdd")[0];
    if (btnAdd) {
      console.log(btnAdd.id);
      btnAdd.addEventListener("click", async () => {
        const { data: item } = await ProductApi.get(btnAdd.id);
        let carts = localStorage.getItem("cart");
        carts = carts === null ? [] : JSON.parse(carts);
        let existed = await carts.map((ele) => ele.id).indexOf(item.id);
        if (existed == -1) {
          let product = item;
          carts.push({ ...product, count: 1 });
          localStorage.setItem("cart", JSON.stringify(carts));
        } else {
          carts[existed].count += 1;
          localStorage.setItem("cart", JSON.stringify(carts));
        }
        window.location = "http://localhost:8080/#/cart";
      });
    }
  },
};

export default ProductDetail;
