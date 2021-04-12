import express from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth.js";
import {
  create,
  findID,
  read,
  remove,
  list,
  update,
  photo,
} from "../controllers/product.js";
import { findIdUser } from "../controllers/user.js";
const router = express.Router();

router.get("/product/:productID", read);
router.get("/products", list);
router.get("/product/photo/:productID", photo);

router.delete("/product/:productID/:userId", requireSignin, isAuth, isAdmin, remove);

router.post("/products/create/:userId", requireSignin, isAuth, isAdmin, create);

router.put("/product/:productID/:userId", requireSignin, isAuth, isAdmin, update);

router.param("productID", findID);
router.param("userId", findIdUser);
module.exports = router;
