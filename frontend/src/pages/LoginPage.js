import axios from "axios";

const LoginPage = {
  render() {
    return /*html*/ `
    <section class="wrap-login">
  
    <div class="box">
      
      <div class="square" style="--i:0;"></div>
      <div class="square" style="--i:1;"></div>
      <div class="square" style="--i:2;"></div>
      <div class="square" style="--i:3;"></div>
      <div class="square" style="--i:4;"></div>
      <div class="square" style="--i:5;"></div>
      
      <div class="container"> 
      <div class="form"> 
        <h2>LOGIN to Divine</h2>
        <form action="" id="loginfrom">
          <div class="inputBx">
            <input type="text" name="email" required="required" id="emailLogin">
            <span>Email</span>
            <img src="https://www.flaticon.com/svg/static/icons/svg/709/709699.svg" alt="user">
          </div>
          <div class="inputBx password">
            <input type="password" name="password" required="required" id="myPsw">
            <span>Password</span>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828471.svg" alt="lock">
          </div>
          <div class="inputBx">
            <button type="submit" class="btn">Log in</button>
          </div>
        </form>
        <p>Don't have an account <a href="#/contact">Sign up</a></p>
      </div>
    </div>
      
    </div>
  </section>
    `;
  },
  afterRender() {
    try {
      const Axios = axios.create({
        baseURL: "http://localhost:4000/api",
        headers: {
          "Content-Type": "application/json",
        },
      });

      document
        .querySelector("#loginfrom")
        .addEventListener("submit", async (e) => {
          e.preventDefault();

          const body = {
            email: document.querySelector("#emailLogin").value,
            password: document.querySelector("#myPsw").value,
          };

          const {data: user} = await Axios.post("/signin", body)
          // document.cookie = `${user.token}`
          localStorage.setItem('token', `${user.token}`)
          localStorage.setItem('id', `${user.user._id}`)
          window.location = `http://localhost:8080/#`;
        });
    } catch (error) {
      console.log(error);
    }
  },
};

export default LoginPage;
