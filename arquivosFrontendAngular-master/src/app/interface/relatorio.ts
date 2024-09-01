export class Relatorio {
  arquivo_id!: string;
  usuario_id!: number;
  arquivo_descricao!: string;
  arquivo_data!: string | Date;
  arquivo_versao!: number;
  arquivo_link!: string;
  local_id!: number;
  projeto_id!: number;
  etapa_id!: number;
  arquivo_id_pai!: string;
  arquivo_status!: number;
  autor!: string;
  projeto_descricao!: string;
  etapa_descricao!: string;
}
