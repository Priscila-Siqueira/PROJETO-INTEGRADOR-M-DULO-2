export interface Permissionamento {
  permissionamento_id: string;
  projeto_id: number;
  disciplina_id?: number;
  grupo_id?: number;
  permissionamento_tipo?: string;
  arquivo_id?: string;
  etapa_id?: string;
  usuario_id: number;
  empreendimento_id?: number;
}
