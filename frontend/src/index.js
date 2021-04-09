import Homepage from "./pages/Home.js";
import ProductsPage from "./pages/ProductsPage.js";
import ProductDetailPage from "./pages/ProductDetail.js";
import Error404Page from "./pages/Error404Page.js";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import { parseRequestUrl, $ } from "./utils.js";
import Category from "./pages/Category.js";
import adminPage from "./pages/AdminPage.js";
import AddProductPage from "./pages/AddProductPage.js";
import RepairProduct from "./pages/RepairProduct.js";
import ViewCartPage from "./pages/VeiwCartPage.js";
import ListProduct from "./Components/ListProduct.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContacPage.js";
import AddNewCategory from "./pages/AddNewCategory.js";
import CategoryList from "./pages/CategoryList.js";
import RepairCategory from "./pages/RepairCategory.js";
import ProductDetail from "./pages/ProductDetail.js";
import ViewDetailFeed from "./pages/ViewDetailFeed.js";

const routes = {
  "/": Homepage,
  "/products": ProductsPage,
  "/products/:id": ProductDetailPage,
  "/categorys/:id": Category,
  "/admin": adminPage,
  "/add": AddProductPage,
  "/repair/:id": RepairProduct,
  "/cart": ViewCartPage,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/add-category": AddNewCategory,
  "/sua-category/:id": RepairCategory,
  "/feedback/:id": ViewDetailFeed,
};

const router = async () => {
  try {
    const request = parseRequestUrl();
    const parseUrl =
      (request.resource ? `/${request.resource}` : "/") +
      (request.id ? "/:id" : "");

    const page = routes[parseUrl];

    const main = $("#main-content");
    const header = $("#header");
    const banner = $("#banner");
    // const footer = $("#footer");
    if (request.resource === "admin") {
      header.innerHTML = await Header.render();
      main.innerHTML = await page.render();
      page.afterRender();
      // ListProduct.handlePaginate();
    } else {
      header.innerHTML = await Header.render();
      banner.innerHTML = await Banner.render();
      main.innerHTML = await page.render();
      if (
        page === ListProduct ||
        page === AddProductPage ||
        page === Homepage ||
        page === RepairProduct ||
        page === ViewCartPage ||
        page === AddNewCategory ||
        page === CategoryList ||
        page === RepairCategory ||
        page === ProductDetail ||
        page === ContactPage
      ) {
        await page.afterRender();
      }
      // if (page == ViewCartPage || page == ListProduct) {
      //   page.handleDelete();
      // }
    }
  } catch (error) {
    const main = $("#main-content");
    console.log(error);
    main.innerHTML = await Error404Page.render();
  }
};

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
