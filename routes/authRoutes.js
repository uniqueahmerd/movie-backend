import express from "express";
import { register, login } from "../controllers/authController.js";
import { logout } from "../controllers/logoutController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
