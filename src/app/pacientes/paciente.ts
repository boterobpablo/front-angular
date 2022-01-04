import { Consulta } from "../consultas/models/consulta";

export class Paciente {
    id: number;
    nombre: string;
    apellido: string;
    documentoIdentidad: number;
    genero: string;
    lugarNacimiento: string;
    fechaNacimiento: string;
    tipoSangre: string;
    eps: string;
    direccion: string;
    telefono: number;
    email: string;
    estadoCivil: string;
    consultas: Consulta[] = [];
}
