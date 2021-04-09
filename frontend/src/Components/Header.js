const Header = {
    render() {
    // const { data: carts } = await CardApi.getAll();

    // console.log(Object.entries(carts).length);
    // axios
    //   .get("http://localhost:3000/cards")
    //   .then(function (response) {
    //     data = response.data.length
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

    return /*html*/`
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
    </div>

    <header class="home-page fixed-header">
        <nav id="sidebar" class="navbar p-0">
            <div id="dismiss" onclick="closeCollapse()">
                <i class="fas fa-times"></i>
            </div>

            <div class="menu-list">
                <ul id="menu-content" class="menu-content">
                    <li class="mt-0 collapsed" style="background-color: #4267B2">
                        <div class="header-btn text-white">
                            <i class="fas fa-user-circle" style="font-size: 30px;"></i>
                            <span class="text-white">
                                <a href="#" class="text-white">Đăng
                                    nhập </a>
                                <br>
                                <small style="margin: 40px;">Xem nhiều thông tin hơn</small>
                            </span>
                        </div>
                    </li>

                    <li>
                        <a href="#"><i class="fa fa-home icon-font18"></i>Trang chủ</a>
                    </li>


                    <li data-toggle="collapse" data-target="#danh-muc" class="collapsed">
                        <a><i class="fa fa-bars icon-font18"></i>Danh mục sản phẩm <i class="fa fa-angle-down"></i></a>
                    </li>
                    <ul class="sub-menu collapse" id="danh-muc">
                        <li>
                            <a href="#">
                                <i class="fab fa-steam-symbol"></i>
                                Game trên Steam </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-trophy"></i>
                                PUBG </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-origin-svg"></i>
                                Game trên Origin </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-battle-net-svg"></i>
                                Game trên Battle.net </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-wallet"></i>
                                Steam Wallet </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-mobile-alt"></i>
                                Nạp Game Mobile </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-broadcast-tower"></i>
                                Gói Data Mobile </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-google-play"></i>
                                Google Play, iTunes </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-magic"></i>
                                Tiện ích </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-wallet"></i>
                                Nintendo Eshop Card </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-xbox"></i>
                                Xbox Gift Card </a>
                        </li>
                    </ul>

                    <hr />
                    <li>
                        <a href="#">
                            <i class="fas fa-gamepad"></i>
                            Hướng dẫn mua hàng </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="far fa-handshake"></i>
                            Liên hệ hợp tác </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="far fa-credit-card"></i>
                            Hình thức thanh toán </a>
                    </li>
                    <li>
                        <a href="?">
                            <i class="fas fa-life-ring"></i>
                            Hỗ trợ </a>
                    </li>

                    <hr>
                    <li style="margin: 0;">
                        <i class="fa fa-phone"></i><a href="#" style="font-size: 17px;">1900 633 305</a> -
                        <a href="#" style="font-size: 17px;">096 4567 247</a>
                        </a>
                    </li>
                    <li style="margin: 0;"><a href="#" style="font-size: 17px;" target="_blank"><i
                                class="fab fa-facebook-messenger"></i>Nhắn tin cho Shop </a></li>

                </ul>
            </div>
        </nav>

        <div class="overlay"></div>

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
                                <a href="#/cart">
                                    <div class="align-items-center d-flex" id="update-cart">
                                        <i class="fas fa-shopping-cart cart-size text-white"></i><b class="cart-text">Giỏ
                                        hàng</b><span class="quantity"></span>
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
  },
};

export default Header;
