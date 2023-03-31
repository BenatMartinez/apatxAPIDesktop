import { Request, Response } from "express";
import { registerNewAlumno, getAlumnoById, updateAlumnoById, deleteAlumnoById } from "../services/alumno.services";
import { handleHttp } from "../utils/error.handle";

const postAlumno = async ({ body }: Request, res: Response) => {
    try {
        const responseAlumno = await registerNewAlumno(body);
        res.send(responseAlumno);
      } catch (e) {
        handleHttp(res, "ERROR_REGISTRAR_ALUMNO");
      }
};

const getAlumno = async ({ params }: Request, res: Response) => {
    try {
        const responseAlumno = await getAlumnoById(params.id);
        res.send(responseAlumno);
      } catch (e) {
        handleHttp(res, "ERROR_GET_ALUMNO");
      }
};

const updateAlumno = async ({ params, body }: Request, res: Response) => {
    try {
        const responseAlumno = await updateAlumnoById(params.id, body);
        res.send(responseAlumno);
      } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ALUMNO");
      }
};

const deleteAlumno = async ({ params }: Request, res: Response) => {
    try {
        const responseAlumno = await deleteAlumnoById(params.id);
        res.send(responseAlumno);
      } catch (e) {
        handleHttp(res, "ERROR_DELETE_ALUMNO");
      }
};

export {postAlumno, getAlumno, updateAlumno, deleteAlumno};