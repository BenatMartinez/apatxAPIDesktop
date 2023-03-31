import { Alumno } from "../interfaces/alumno.interface";
import { Schema, Types, model, Model } from "mongoose";


const AlumnoSchema = new Schema<Alumno>(
  {
    nombre: {
      required: true,
      type: String,
    },
    apellido: {
        required: true,
        type: String,
      },
    descripcion: {
      type: String
    },
    curso: {
      type: String,
    },
    contacto: {
        type: {
          email: {
            type: String,
          },
          telefono: {
            type: String,
          },
          tutor: {
            type: String,
          },
          direccion: {
            type: String,
          },
        },
      },
    activo: {
        type: Number,
        default: 1,
        required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AlumnoModel = model("alumnos", AlumnoSchema);
export default AlumnoModel;