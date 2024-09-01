import { Projeto } from './projeto';

export interface Empresa{
    empresa_id: number;
    empresa_nome: string;
    projetos : Projeto[]
}
