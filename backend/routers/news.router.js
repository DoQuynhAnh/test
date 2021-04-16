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
} from "../controllers/news.js";
import { findIdUser } from "../controllers/user.js";
const router = express.Router();

router.get("/news/:newsID", read);
router.get("/listNews", list);
router.get("/news/photo/:newsID", photo);

router.delete(
  "/news/:newsID/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.post("/news/create/:userId", requireSignin, isAuth, isAdmin, create);

router.put(
  "/news/:newsID/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.param("newsID", findID);
router.param("userId", findIdUser);
module.exports = router;
