import { Etapa } from "./etapa"

export interface listaCompartilhadaArquivo{
  lista_compartilhada_arquivo_id: number,
  permissionamento_id: string,
  lista_compartilhada_id: number,
  lista_compartilhada_arquivo_acesso: Date,
  lista_compartilhada_arquivo_status: number,
  permissionamento: {
    permissionamento_id: string,
    permissionamento_tipo: string,
    arquivo_id: string,
    usuario_id: number,
    arquivo: {
      arquivo_id: string,
      usuario_id: number,
      arquivo_descricao: string,
      projeto: {
        projeto_id: number,
        projeto_descricao: string
      },
      etapa: {
        etapa_id: number,
        etapa_descricao: string,
        disciplina: {
          disciplina_id: number,
          disciplina_descricao: string,
        }
      }
    }
  }
}
