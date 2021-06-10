import axios from "axios";

const ContactPage = {
  render() {
    return /*html*/ `
		<div class="container">
		<div class="alert alert-success d-none" role="alert" id="showAlertContact">
          Đăng nhập thành công
        </div>
    <div class="background">
       <div class="my-container-contact">
          <div class="screen">
             <div class="screen-header">
                <div class="screen-header-left">
                   <div class="screen-header-button close"></div>
                   <div class="screen-header-button maximize"></div>
                   <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                   <div class="screen-header-ellipsis"></div>
                   <div class="screen-header-ellipsis"></div>
                   <div class="screen-header-ellipsis"></div>
                </div>
             </div>
             <div class="screen-body">
                <div class="screen-body-item left">
                   <div class="app-title"><span style="font-size: 26px;">ĐĂNG</span><span style="font-size: 26px;">KÝ</span></div>
                   <div class="app-contact" style="font-size: 14px;">CONTACT INFO : +84 0832 582 556</div>
                </div>
                <div class="screen-body-item">
                   <form class="app-form" id="submitt">
                      <div class="app-form-group"><input class="app-form-control" name="name" placeholder="NAME (*)" id="name"></div>
                      <div class="app-form-group"><input class="app-form-control" name="mail" placeholder="EMAIL (*)" id="email"></div>
                      <div class="app-form-group"><input class="app-form-control" name="password" type="password" placeholder="password" id="password"></div>
                      <div class="app-form-group buttons"><button class="app-form-button" type="submit" id="seen">SEND</button></div>
                   </form>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>

    `;
  },
  afterRender() {
    try {
      const Axios = axios.create({
        baseURL: " http://localhost:4000/api",
        headers: {
          "Content-Type": "application/json",
        },
      });

      document.querySelector("#submitt").addEventListener("submit", async (e) => {
        e.preventDefault();

        const body = {
          name: document.querySelector("#name").value,
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        };

        await Axios.post("/singup", body);

        document.querySelector("#showAlertContact").classList.remove("d-none");
        setTimeout(() => {
          document.querySelector("#showAlertContact").classList.add("d-none");
        }, 2000);
        // window.location = "http://localhost:8080/#/admin";
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default ContactPage;
