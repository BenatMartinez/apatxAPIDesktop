import { Request, Response, Router } from "express";
import { postClase, getClase, updateClase, deleteClase } from "../controllers/clase.controller";
import {checkJwt} from "../middleware/session"

const router = Router();

router.post("", postClase);
router.get("/:id", getClase);
router.put("/:id", updateClase);
router.delete("/:id", deleteClase);

export { router };
