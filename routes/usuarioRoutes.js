import { Router } from "express";
import { formularioLogin, formularioOlvidePassword, formularioRegistro, } from "../controllers/usuarioControllers.js";

const router = Router();

router.get("/login", formularioLogin);


router.get("/registro", formularioRegistro)
router.get("/olvide-password", formularioOlvidePassword)

export default router;