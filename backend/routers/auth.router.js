import express from "express";
import { singup, signin, signout } from "../controllers/auth";
import { userSignupValidator } from "../validator";
const router = express.Router();

router.post("/singup", userSignupValidator, singup);
router.post("/signin", signin);
router.post("/signout", signout);

module.exports = router;
