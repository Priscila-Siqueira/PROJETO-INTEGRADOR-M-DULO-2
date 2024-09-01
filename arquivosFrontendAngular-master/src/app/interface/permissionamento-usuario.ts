// src/app/interfaces/projeto.interface.ts
export interface PermissionamentoUsuario {
  dropdownOpen: boolean;
    projeto_id: number;
    projeto_descricao: string;
    projeto_data_inicio: Date;
    projeto_data_fim: Date;
    projeto_orcamento: number;
    projeto_status: number;
    empresa_id: number;
    empresa_nome: string;
    empresa_cnpj: string;
    empresa_status: number;
    permissionamento_tipo: string;
  }
  