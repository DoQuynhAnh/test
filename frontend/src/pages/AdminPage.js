import ListProduct from "../Components/ListProduct";
import axios from 'axios'
import CategoryList from "./CategoryList";


const adminPage = {
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

      if(user.role === 1) {
        console.log("ok");
      }else {
        window.location = `http://localhost:8080/#`;
      }
    }

    return /*html*/ `
    <div class="container-fluid mt-3">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-static pt-3">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a 
                            style="
                                line-height: 2;
                                text-align: center;
                            "
                            class="nav-link active" 
                            id="v-pills-home-tab" 
                            data-toggle="pill" 
                            href="#v-pills-home" 
                            role="tab" 
                            aria-controls="v-pills-home" 
                            aria-selected="true"
                        >
                            Product
                        </a>
                        <a 
                            style="
                                line-height: 2;
                                text-align: center;
                            "
                            class="nav-link " 
                            id="v-pills-profile-tab" 
                            data-toggle="pill" 
                            href="#v-pills-profile" 
                            role="tab" 
                            aria-controls="v-pills-profile" 
                            aria-selected="false">category</a>
                            <a 
                            style="
                                    line-height: 2;
                                    text-align: center;
                                    "
                                class="nav-link" 
                                id="v-pills-messages-tab" 
                                data-toggle="pill" 
                                href="#v-pills-messages" 
                                role="tab" 
                                aria-controls="v-pills-messages" 
                                aria-selected="false"
                            >
                                Messages
                            </a>
                    <div>
                </div>
            </nav>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <div class="table-responsive" id="table-render">
                  ${await ListProduct.render()}
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">.
                <div class="table-responsive" id="category-render">
                  ${await CategoryList.render()}
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
            </div>
            </main>
        </div>
    </div>
    
        `;
  },
  async afterRender() {
    return `${
      (await ListProduct.afterRender()) || (await CategoryList.afterRender())
      //   (await ListFeedBack.afterRender())
    }`;
  },
};

export default adminPage;
