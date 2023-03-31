import { Clase } from "../interfaces/clase.interface";
import { Schema, Types, model, Model } from "mongoose";


const ClaseSchema = new Schema<Clase>(
  {
    nombre: {
      required: true,
      type: String,
      unique: true,
    },
    descripcion: {
      type: String
    },
    precio: {
      type: String,
      required: true,
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

const ClaseModel = model("clases", ClaseSchema);
export default ClaseModel;
