import FeedBackApi from "../api/feedBack";
import { uuid } from "../utils";

const ContactPage = {
  render() {
    return /*html*/ `
		<div class="container">
		<div class="alert alert-success d-none" role="alert" id="showAlertContact">
          Gửi thành công, chúng tôi sẽ sớm liên hệ với bạn
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
                   <div class="app-title"><span style="font-size: 26px;">CONTACT</span><span style="font-size: 26px;">US</span></div>
                   <div class="app-contact" style="font-size: 14px;">CONTACT INFO : +84 0999 999 999</div>
                </div>
                <div class="screen-body-item">
                   <form class="app-form" id="submitt">
                      <div class="app-form-group"><input class="app-form-control" name="ten" placeholder="NAME (*)" id="name"></div>
                      <div class="app-form-group"><input class="app-form-control" name="mail" placeholder="EMAIL (*)" id="email"></div>
                      <div class="app-form-group"><input class="app-form-control" name="sdt" type="number" placeholder="CONTACT NO (*)" id="sdt"></div>
                      <div class="app-form-group message"><textarea class="app-form-control" name="msg" placeholder="MESSAGE (*)" id="msg"></textarea></div>
                      <div class="app-form-group buttons"><button class="app-form-button">CANCEL</button><button class="app-form-button" id="seen">SEND</button></div>
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
    $(document).ready(function () {
      //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
      // console.log($("#submitt").validate());
      $("#submitt").validate({
        rules: {
          ten: { required: true, minlength: 2 },
          sdt: {
            required: true,
            minlength: 10,
            maxlength: 10,
          },
          email: {
            required: true,
            email: true,
          },
          msg: {
            required: true,
            minlength: 20,
          },
        },
        messages: {
          ten: {
            required: "Vui lòng nhập tên",
            minlength: "tên quá ngắn (min>=2)",
          },
          sdt: {
            required: "Vui lòng nhập số điện thoại",
            minlength: "Số máy quý khách vừa nhập là số không có thực",
            maxlength: "Số máy quý khách vừa nhập là số không có thực",
          },
          email: "Vui lòng nhập Email",
        },
        submitHandler: function (form) {
          $( "#submitt" ).submit((e) => {
            e.preventDefault();
            const body = {
              id: uuid(),
              name: document.querySelector("#name").value,
              email: document.querySelector("#email").value,
              sdt: document.querySelector("#sdt").value,
              msg: document.querySelector("#msg").value,
            };
            console.log(body);
            FeedBackApi.post(body);
            document
              .querySelector("#showAlertContact")
              .classList.remove("d-none");
            setTimeout(() => {
              document
                .querySelector("#showAlertContact")
                .classList.add("d-none");
            }, 2000);
          });
        },
      });
    });
  },
};

export default ContactPage;
