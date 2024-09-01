import { Projeto } from "./projeto";

export interface ProjetoComDisciplinas extends Projeto{
  projeto_id: number;
  projeto_descricao: string;
  empresa_nome: string;
  disciplinas_ativas: number;
  disciplinas_em_processamento: number;
  disciplinas_inativas: number;
}
