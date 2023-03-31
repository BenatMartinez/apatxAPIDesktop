import { Request, Response, Router } from "express";
import {postAlumno, getAlumno, updateAlumno, deleteAlumno} from "../controllers/alumno.controller";

const router = Router();

router.post("", postAlumno);
router.get("/:id", getAlumno);
router.put("/:id", updateAlumno);
router.delete("/:id", deleteAlumno);

export { router };