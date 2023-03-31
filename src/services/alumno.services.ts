import { Alumno } from "../interfaces/alumno.interface";
import AlumnoModel from "../models/alumno";

const registerNewAlumno = async ({ nombre, apellido, descripcion, curso, contacto}: Alumno) => {
    const registerNewAlumno = await AlumnoModel.create({
        nombre,
        apellido,
        descripcion,
        curso,
        contacto
    });
    return registerNewAlumno;
};

const getAlumnoById = async (id: string) => {
    const alumno = await AlumnoModel.findById(id);
    return alumno;
};

const updateAlumnoById = async (id: string, { nombre, apellido, descripcion, curso, contacto }: Alumno) => {
    const updatedAlumno = await AlumnoModel.findByIdAndUpdate(id, {
        nombre,
        apellido,
        descripcion,
        curso,
        contacto
    }, { new: true });
    return updatedAlumno;
};

const deleteAlumnoById = async (id: string) => {
    const deletedAlumno = await AlumnoModel.findByIdAndDelete(id);
    return deletedAlumno;
};

export { registerNewAlumno, getAlumnoById, updateAlumnoById, deleteAlumnoById };