
import { Indicador } from "./Indicador";

export class Evidencia {
    id_evidencia: number = 0;
    enlace: string = "";
    nombre: string = "";
    visible: string = "";
    indicador:Indicador | null = null;
}


interface Indicador{
    id_indicadores: number;
    nombre:string;
    descripcion:string;
   
}
