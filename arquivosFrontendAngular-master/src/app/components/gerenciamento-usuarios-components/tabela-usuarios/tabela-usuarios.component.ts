import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interface/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { TabsUsuarioComponent } from "../tabs-usuario/tabs-usuario.component";

@Component({
    selector: 'app-tabela-usuarios',
    standalone: true,
    templateUrl: './tabela-usuarios.component.html',
    styleUrl: './tabela-usuarios.component.css',
    imports: [TabsUsuarioComponent]
})
export class TabelaUsuariosComponent implements OnInit {

  listaUsuarios: Usuario[] = []
  check = true

  constructor (private usuarioService : UsuarioService){}

  ngOnInit(): void {
    this.getUsuariosAdminEmpresa(4);
  }
  getUsuariosAdminEmpresa(idEmpresa: number):void{
    this.usuarioService.getUsuariosPorEmpresaId(idEmpresa).subscribe({
      next: (response)=> {
        response && (this.listaUsuarios = response);
      },
      error: (error) => console.log(error),
    });
  }

  detalharUsuario(usuario: Usuario) {
    console.log("setando o usuário ", usuario);


    this.usuarioService.setAutor(usuario);

  }


}
