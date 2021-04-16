import axios from "axios";
import { $ } from "../utils";

const Header = {
  async render() {
    let id = localStorage.getItem("id");
    let user = {};

    if (id) {
      let token = localStorage.getItem("token");
      const CreateAxios = axios.create({
        baseURL: " http://localhost:4000/api",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await CreateAxios.get(`/user/${id}`);
      user = data.data;
    }

    let head1 = `<header class="home-page fixed-header">
    <div class="header-container container">
        <div id="sidebarCollapse" class="btn-menu" onclick="toggleMenuMoble()">
            <i class="fas fa-bars" style="font-size: 20px; vertical-align: middle"></i>
        </div>
        <div class="logo"><a href="#"><img style="margin-right: 10px;width: 60px"
                    src="https://divineshop.vn/assets/resources/logo_divine_pure_white.png" />
                <img style="width: 100px;" src="https://divineshop.vn/assets/resources/logo-1.png" /></a></div>
        <div class="search-form">
            <div class="search-control" id="search">
                <input type="text" id="filter_name" class="search-box" name="search" value=""
                    placeholder="Nhập sản phẩm cần tìm...">
                <div class="search-btn" id="button-search-header">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
        <div class="cart-mobile">
            <div class="align-items-center d-flex">
                <a href="#"><i class="fas fa-shopping-cart cart-size-mobile"></i> <span
                        class="quantity_mobile">0</span></a>
            </div>
        </div>
        <div class="header-btn">
            <div class="header-btn d-flex flex-row">
                <div class="d-flex align-items-center ml-1">

                <div class="ml-5">
                <div class="border-white">
                    <a href="#/login">
                        <div class="align-items-center d-flex">
                            <i class="fas fa-sign-in-alt cart-size text-white"></i><b class="cart-text">Đăng nhập</b>
                            </div>
                    </a>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
</header>`;

    let head2 = `
    <header class="home-page fixed-header">
    <div class="header-container container">
        <div id="sidebarCollapse" class="btn-menu" onclick="toggleMenuMoble()">
            <i class="fas fa-bars" style="font-size: 20px; vertical-align: middle"></i>
        </div>
        <div class="logo"><a href="#"><img style="margin-right: 10px;width: 60px"
                    src="https://divineshop.vn/assets/resources/logo_divine_pure_white.png" />
                <img style="width: 100px;" src="https://divineshop.vn/assets/resources/logo-1.png" /></a></div>
        <div class="search-form">
            <div class="search-control" id="search">
                <input type="text" id="filter_name" class="search-box" name="search" value=""
                    placeholder="Nhập sản phẩm cần tìm...">
                <div class="search-btn" id="button-search-header">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
        <div class="cart-mobile">
            <div class="align-items-center d-flex">
                <a href="#"><i class="fas fa-shopping-cart cart-size-mobile"></i> <span
                        class="quantity_mobile">0</span></a>
            </div>
        </div>
        <div class="header-btn">
            <div class="header-btn d-flex flex-row">
                <div class="d-flex align-items-center ml-1">

                <div class="ml-5">
                <div class="border-white">
                    <a href="#">
                        <div class="align-items-center d-flex">
                            <b class="cart-text">${user.name}</b>
                            </div>
                    </a>
                </div>
            </div>

                    <div class="ml-5">
                        <div class="border-white" id="logout">
                            <a>
                                <div class="align-items-center d-flex">
                                    <i class="fas fa-sign-out-alt cart-size text-white"></i><b class="cart-text">Đăng xuất</b><span class="quantity"></span>
                                    </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</header>
    `;

    return /*html*/ `
        <div class="top-header ">
        <div class="container">
            <div class="row" style="opacity: 0.7">
                <div class="text-right" style="padding:5px 0;float: right; width: 100%;">
                    Hỗ trợ:
                    <a href="#" style="color: inherit;">1900 633 305</a> - <a href="#" style="color: inherit;">096 4567
                        247</a>
                </div>
            </div>
        </div>
        ${user.name ? head2 : head1}
    </div>

        `;
  },

  async afterRender() {
    let btnLogoutHead = $("#logout")
    if (btnLogoutHead.length !== 0) {
      await $("#logout").addEventListener("click", () => {
        console.log("chay");
        localStorage.clear();
        location.reload();
      });
    }
  },
};

export default Header;
