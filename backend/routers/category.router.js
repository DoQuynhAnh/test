import express from "express";
import {
  create,
  findID,
  read,
  remove,
  list,
  upadate,
} from "../controllers/category";
import { findIdUser } from "../controllers/user";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";

const router = express.Router();

// router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.get("/categorys", list);
router.get("/category/:categoryID", read);

router.delete(
  "/category/:categoryID/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.post("/create/category/:userId", requireSignin, isAuth, isAdmin, create);

router.put(
  "/category/:categoryID/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  upadate
);

router.param("categoryID", findID);
router.param("userId", findIdUser);

module.exports = router;
