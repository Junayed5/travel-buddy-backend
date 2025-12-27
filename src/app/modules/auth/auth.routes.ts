import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.get("/login", AuthController.loginUser);
export const AuthRouter = router;