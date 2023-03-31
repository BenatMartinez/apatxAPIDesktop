import { Request, Response } from "express";
import { registerNewClase, getClaseById, updateClaseById, deleteClaseById } from "../services/clase.services";
import { handleHttp } from "../utils/error.handle";

const postClase = async ({ body }: Request, res: Response) => {
    try {
        const responseClase = await registerNewClase(body);
        res.send(responseClase);
      } catch (e) {
        handleHttp(res, "ERROR_REGISTRAR_CLASE");
      }
};

const getClase = async ({ params }: Request, res: Response) => {
    try {
        const responseClase = await getClaseById(params.id);
        res.send(responseClase);
      } catch (e) {
        handleHttp(res, "ERROR_GET_CLASE");
      }
};

const updateClase = async ({ params, body }: Request, res: Response) => {
    try {
        const responseClase = await updateClaseById(params.id, body);
        res.send(responseClase);
      } catch (e) {
        handleHttp(res, "ERROR_UPDATE_CLASE");
      }
};

const deleteClase = async ({ params }: Request, res: Response) => {
    try {
        const responseClase = await deleteClaseById(params.id);
        res.send(responseClase);
      } catch (e) {
        handleHttp(res, "ERROR_DELETE_CLASE");
      }
};

export {postClase, getClase, updateClase, deleteClase};

