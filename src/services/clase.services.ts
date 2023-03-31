import { Clase } from "../interfaces/clase.interface";
import ClaseModel from "../models/clase";

const registerNewClase = async ({ nombre, descripcion, precio, activo }: Clase) => {
  const newClase = await ClaseModel.create({
    nombre,
    descripcion,
    precio,
    activo,
  });
  return newClase;
};

const getClaseById = async (id: string) => {
  const clase = await ClaseModel.findById(id);
  return clase;
};

const updateClaseById = async (id: string, { nombre, descripcion, precio, activo }: Clase) => {
  const updatedClase = await ClaseModel.findByIdAndUpdate(id, {
    nombre,
    descripcion,
    precio,
    activo,
  }, { new: true });
  return updatedClase;
};

const deleteClaseById = async (id: string) => {
  const deletedClase = await ClaseModel.findByIdAndDelete(id);
  return deletedClase;
};

export { registerNewClase, getClaseById, updateClaseById, deleteClaseById };