import CardApi from "../api/CardApi";
import ProductApi from "../api/ProductApi";
import { $ } from "../utils";

const HomePage = {
  async render() {
    try {
      const { data: products } = await ProductApi.getAll();
      return /*html*/ `
				
				<div class="container mt-4" id="addCart">
				<div class="list-title">
					<h2>Game trên Strem</h2>
					<a href="#/categorys/2">Xem chi tiết</a>
				</div>
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
								<a href="">
									<div class="item-title">
										${item.name}
									</div>
								</a>
								<div class="item-price">
									<span class="cur-p">${item.price}đ</span>
								</div>
								<div class="item-btn-a" id=${item._id}>
									<a>
									<i class="fas fa-shopping-cart "></i>
									</a>
								</div>
								<a href="#/products/${item._id}" class="item-btn" style="margin-top: 10px">Chi tiết</a>
							</div>
							</div>
						</div>
						`
              )
              .join("")}
					</div>
				</div>
				</div>
				<div class="container mt-4">
				<div class="list-title">
					<h2>Game trên Origin</h2>
					<a href="#/categorys/1">Xem chi tiết</a>
				</div>
				<div class="list-container">
					<div class="row service mt-5">
						${[]
              .map(
                (item) => /*html*/ `
						<div class="col-md-6 col-lg-3 col-sm-6 col-xs-6 item-frames">
							<div class="item-game-wrapper">
							<a href="#">
								<div class="img">
									<img class="check_img_errs"
										src="${item.image}">
								</div>
							</a>
							<div class="item-info">
								<a href="">
									<div class="item-title">
										${item.name}
									</div>
								</a>
								<div class="item-price">
									<span class="cur-p">${item.price}đ</span>
								</div>
								<div class="item-btn-a" id=${item.id}>
									<a>
									<i class="fas fa-shopping-cart "></i>

									</a>
								</div>
								<a href="#/products/${item.id}" class="item-btn" style="margin-top: 10px">Chi tiết</a>
							</div>
							</div>
						</div>
						`
              )
              .join("")}
					</div>
				</div>
				</div>
				<div class="">
				<div class="section-title">
					<h2>
						<a href="#">Tin tức</a>
					</h2>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="card text-center">
							<img class="card-img-top" src="https://divineshop.vn/image/catalog/image_compression/viettel.png" alt="Card image cap">
							<div class="card-body">
							<h5 class="card-title">Gói nạp Data VinaPhone 15GB</h5>
							<p class="card-text">Đăng ký 4G VinaPhone đang là mối quan tâm hàng đầu của các thuê bao VinaPhone. Nếu như trước đây mạng 3G là tiêu chuẩn truy cập internet tốc độ cao.
							</p>
							<div class="d-flex justify-content-center">
								<a href="#" class="btn custom-button">Xem thêm</a>
							</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card text-center">
							<img class="card-img-top" src="https://steamcdn-a.akamaihd.net/steam/apps/371520/header.jpg" alt="Card image cap">
							<div class="card-body">
							<h5 class="card-title">Bounty Train</h5>
							<p class="card-text">Một đoàn tàu chạy bằng than thời xưa cần phải có người xúc than, người lái và đôi lúc cả… một vài tay súng để bảo vệ tàu khỏi thổ phỉ hay kẻ xấu khác.
							</p>
							<div class="d-flex justify-content-center">
								<a href="#" class="btn custom-button">Xem thêm</a>
							</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card text-center">
							<img class="card-img-top" src="https://steamcdn-a.akamaihd.net/steam/apps/208580/header.jpg" alt="Card image cap">
							<div class="card-body">
							<h5 class="card-title">Knights of the Old Republic</h5>
							<p class="card-text">Một đoàn tàu chạy bằng than thời xưa cần phải có người xúc than, người lái và đôi lúc cả… một vài tay súng để bảo vệ tàu khỏi thổ phỉ hay kẻ xấu khác.
							</p>
							<div class="d-flex justify-content-center">
								<a href="#" class="btn custom-button">Xem thêm</a>
							</div>
							</div>
						</div>
					</div>
				</div>
				</div>
		`;
    } catch (error) {
      console.log(error);
    }
  },
  async afterRender() {
    const btns = $(".item-btn-a");
    // console.log(btns[0].id);
    btns.forEach((element) => {
      element.addEventListener("click", async () => {
        const targetBtn = element.id;
        const { data: item } = await ProductApi.get(targetBtn);
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
      });
    });
  },
};
export default HomePage;
