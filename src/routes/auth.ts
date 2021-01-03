import { Router } from "express";
import AuthController from "../controller/AuthController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

// Login
router.post("/login", AuthController.login);

// Change password
router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;