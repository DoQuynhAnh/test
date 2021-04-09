import express from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";
import { findIdUser, read, update } from "../controllers/user";

const router = express.Router();

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);

router.param("userId", findIdUser);


module.exports = router;
