export class CreateUsuarioDTO {
    
    usuario_nome?: string;

    usuario_email?: string;

    usuario_cpf?: string;

    usuario_cnpj?: string;

    usuario_endereco?: string;

    usuario_status?: number;

    usuario_cargo?: string;

    empresa_id?: number;
    
    usuario_tipo?: number;

//     constructor(email: string | null){
//         this.usuario_email = email
//     }
}
