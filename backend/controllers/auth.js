import User from "../models/auth";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";

export const singup = (req, res) => {
  const user = new User(req.body);
  user.save((error, user) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        error: "có lỗi sảy ra",
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({ user });
  });
};

export const signin = (req, res) => {
  const { email, password } = req.body;
  console.log("login ", req.body);
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "Email/mật khẩu sai hoặc chưa đc đăng ký!!",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password sai loè ra mà đòi đăng nhập :)) gà",
      });
    }

    const token = jwt.sign({ _id: user._id }, "123456");

    res.cookie("token", token, { expire: new Date() + 9999 });

    const { _id, name, email, role } = user;

    return res.json({
      token,
      user: { _id, email, name, role },
    });
  });
};

export const signout = (req, res) => {
  res.clearCookie("cookie");
  return res.json({
    msg: "log out success",
  });
};

export const requireSignin = expressJwt({
  //authorization token
  secret: "123456",
  algorithms: ["HS256"], // added later
  userProperty: "auth",
  getToken: function fromHeaderOrQuerystring(req) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      console.log(
        "req.headers.authorization ",
        req.headers.authorization.split(" ")[1]
      );
      return req.headers.authorization.split(" ")[1];
    } else if (req.query && req.query.token) {
      console.log("req.query.token", req.query.token);
      return req.query.token;
    }
    return null;
  },
});

export const isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(400).json({
      err: "Quyền truy cập bị Từ chối",
    });
  }
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(400).json({
      err: "ko có quyền truy cập",
    });
  }
  next();
};
