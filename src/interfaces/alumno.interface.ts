import {Contacto} from "./contacto.interface"

export interface Alumno {
    nombre: string;
    apellido: string;
    descripcion: string;
    curso: string;
    activo: number;
    contacto: Contacto;
  }