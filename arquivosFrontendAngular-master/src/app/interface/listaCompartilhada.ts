import { listaCompartilhadaArquivo } from "./listaCompartilhadaArquivo";

export interface listaCompartilhada{
    lista_compartilhada_id: number;
    lista_compartilhada_descricao?: String;
    lista_compartilhada_data?: Date;
    lista_compartilhada_status?: number;
    lista_compartilhada_arquivo: listaCompartilhadaArquivo[];
}
