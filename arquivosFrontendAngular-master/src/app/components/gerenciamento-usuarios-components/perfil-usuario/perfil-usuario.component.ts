import { Component } from '@angular/core';
import { Usuario } from '../../../interface/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { Subscription } from 'rxjs';
import { response } from 'express';




@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {




  usuario: Usuario | null = null;
  usuarioSubscription: Subscription;




  constructor(private usuarioService: UsuarioService){
    this.usuarioSubscription = this.usuarioService.autor$.subscribe(
      usuarioRecebido => {
        this.usuario = usuarioRecebido
      }
    )
  }




  deletarUsuario() {
    if (this.usuario?.usuario_id){
      this.usuarioService.deletarUsuario(this.usuario?.usuario_id).subscribe(
        response => (console.log(response))
      )
    }


  }

  editarUsuario() {
    if (this.usuario?.usuario_id){
      this.usuarioService.deletarUsuario(this.usuario?.usuario_id).subscribe(
        response => (console.log(response))
      )
    }



    
  }

  




  }

  
