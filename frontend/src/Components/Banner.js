import CategoryApi from "../api/CategoryApi";

const Banner = {
  async render() {
    const { data: categorys } = await CategoryApi.getAll();
    return /*html*/`
        <div class="home-page banner-home">
        <div class="menu-2" style="margin-top: 0">
            <div class="container padd-0" style="margin-top: 6px;">
                <div class="menu-catalog">
                    <div class="header-menu">
                    <div class="bar-btn">
                        <i class="fas fa-bars"></i><span>Sidebar Divineshop</span>
                    </div>
                    <div class="nav-menu">
                        <ul>
                            <li>
                                <a href="#/admin"><i class="fas fa-home"></i>
                                <span>Trang quản trị</span></a>
                            </li>
                            <li>
                                <a href="#/products" rel="external"><i class="fab fa-product-hunt"></i>
                                <span>List sản phẩm</span></a>
                            </li>
                            <li>
                                <a href="#/cart"><i class="fas fa-shopping-cart"></i>
                                <span>Giỏ hàng</span></a>
                            </li>
                            <li>
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-dna"></i> Danh mục
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                ${categorys
                                  .map(
                                    (item) => `
                                        <a 
                                            class="dropdown-item" 
                                            href="#/categorys/${item.id}"
                                        >
                                            ${item.name}
                                        </a>
                                    `
                                  )
                                  .join("")}
                                </div>
                            </li>    
                        </ul>
                    </div>
                    </div>
                    <div class="right-menu">
                    <div class="row menu-tab-all service">
                        <div class="quick-menu head-link">
                            <a href="/#/about"><i class="fas fa-gamepad"></i><span>Giới thiệu</span></a>
                        </div>
                        <div class="quick-menu head-link">
                            <a href="#/products"><i class="far fa-handshake"></i><span>Sản phẩm</span></a>
                        </div>
                        <div class="quick-menu head-link">
                            <a href="#"><i class="far fa-credit-card"></i><span>Tin tức</span></a>
                        </div>
                        <div class="quick-menu head-link">
                            <a href="#/contact"><i class="fas fa-life-ring"></i><span>Hỗ
                            trợ</span></a>
                        </div>
                    </div>
                    <div class="row slider-container">
                        <div class="col col-md-12 col-sm-12 col-xs-12 col-lg-12 scale-slide">
                            <img src="https://divineshop.vn/image/catalog/Anh/Banner%2023%20thang%2008/Banner%20hoctap.png"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;
  },
};

export default Banner;
