import { Persona2 } from "./Persona2";

export class Usuario2 {
    id: number = 0;
    username: string = '';
    password: string = '';
    enabled: boolean = true;
    persona: Persona2 = new Persona2();
    visible: boolean = true;
    per2:Persona2|null=null;
}
