import { Paciente } from "src/app/pacientes/paciente";

export class Consulta {

    id: number;
    motivoConsulta: string;
    alergias: string;
    patologias: string;
    patologiasFamiliares: string;
    medicamento: string;
    diagnostico: string;
    tratamiento: string;
    createdAt: string;
    paciente: Paciente;
}
