import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Usuario } from '../../../interface/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { create } from 'domain';
import { CreateUsuarioDTO } from '../../../interface/create-usuario-dto';

//BOTAO
@Component({
  selector: 'app-criacao-usuario-modal-button',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './criacao-usuario-modal-button.component.html',
})
export class CriacaoUsuarioModalButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CriacaoUsuarioModalComponent);
  }
}

//MODAL
@Component({
  selector: 'app-criacao-usuario-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIcon, FormsModule, ReactiveFormsModule],
  templateUrl: './criacao-usuario-modal.component.html',
})
export class CriacaoUsuarioModalComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private dialogRef: MatDialogRef<CriacaoUsuarioModalComponent>
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      usuario_nome: ['', Validators.required],
      usuario_email: ['', [Validators.required, Validators.email]],
      usuario_cpf: ['', Validators.required],
      usuario_cnpj: [''],
      usuario_endereco: ['', Validators.required],
      usuario_cargo: ['', Validators.required],
      usuario_status: [1, Validators.required],
      empresa_id: [4, Validators.required],
      usuario_tipo: [1, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      // const usuario: Usuario = this.usuarioForm.value;
      const usuario = new CreateUsuarioDTO()
      usuario.usuario_nome = this.usuarioForm.get("usuario_nome")?.value
      usuario.usuario_email = this.usuarioForm.get("usuario_email")?.value
      usuario.usuario_cpf = this.usuarioForm.get("usuario_cpf")?.value
      usuario.usuario_cnpj = this.usuarioForm.get("usuario_cnpj")?.value
      usuario.usuario_endereco = this.usuarioForm.get("usuario_endereco")?.value
      usuario.usuario_status = this.usuarioForm.get("usuario_status")?.value
      usuario.usuario_cargo = this.usuarioForm.get("usuario_cargo")?.value
      usuario.empresa_id = this.usuarioForm.get("empresa_id")?.value
      usuario.usuario_tipo = this.usuarioForm.get("usuario_tipo")?.value
      console.log(usuario)
      this.usuarioService.criarUsuario(usuario).subscribe({
        next: (response) => {
          console.log('Usuário criado com sucesso', response);
          this.dialogRef.close(true);
        }
        ,
        error: (error) => {
          console.error('Erro ao criar usuário', error);
        },
        complete: () => {
          console.log('Requisição de criação de usuário completa');
        }
      });
    } else {
      console.error('Formulário inválido');
    }
  
  }
}
