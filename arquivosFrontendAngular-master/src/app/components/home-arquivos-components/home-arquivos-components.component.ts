import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
import { ModalEditProjetoComponent } from "./modal-edit-projeto/modal-edit-projeto.component";
import { Projeto } from '../../interface/projeto';
import { Router } from '@angular/router';
import { ProjetoService } from '../../service/projeto.service';
import { Empresa } from '../../interface/empresa';
import { EmpresaService } from '../../service/empresa.service';

@Component({
  selector: 'app-home-arquivos-components',
  standalone: true,
  templateUrl: './home-arquivos-components.component.html',
  styleUrl: './home-arquivos-components.component.css',
  imports: [CommonModule, ModalEditProjetoComponent]
})
export class HomeArquivosComponentsComponent implements OnInit {

  email: string | null = null;
  idUsuario!: number;
  projetos: Projeto[] = [];
  openedDropdownProjetoId: number | null = null;
  projetoSelecionado: Projeto | null = null;

  constructor(private empresaService: EmpresaService,
    private projetoService: ProjetoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');
    if (this.email) {
      this.usuarioService.getUsuarioPorEmail(this.email).subscribe(
        (usuario) => {
          this.idUsuario = usuario?.usuario_id;
          const empresaId = usuario?.empresa_id;
          if (this.idUsuario && empresaId) {
            sessionStorage.setItem('id', this.idUsuario.toString());
            sessionStorage.setItem('empresaId', empresaId.toString());
            this.carregarProjetosDaEmpresaId(empresaId); // Carrega projetos da empresa do usuário
          }
        },
        (error) => {
          console.error('Erro ao buscar usuário pelo email', error);
        }
      );
    }
  }

  carregarProjetosDaEmpresaId(empresaId: number) {
    this.projetoService.getProjetosDaEmpresaId(empresaId).subscribe({
      next: (projetos) => {
        this.projetos = projetos;
        this.carregarEmpresaNome(projetos);
      },
      error: (error) => console.log(error),
    });
  }

  carregarEmpresaNome(projeto: Projeto[]): void {
    projeto.forEach((proj: Projeto) => {
      this.empresaService.getEmpresaById(proj.empresa_id).subscribe(
        (empresa: Empresa) => {
          if (projeto) {
            proj.empresa_nome = empresa.empresa_nome || '';
          } else {
            proj.empresa_nome = '';
          }
        },
      );
    });
  }

  deletarProjeto(idProjeto: number | undefined): void {
    if (idProjeto === undefined) {
      console.error("Não é possível excluir o projeto: idProjeto está indefinido");
      return;
    }
    this.projetoService.excluirProjeto(idProjeto).subscribe(() => {
      this.projetos = this.projetos.filter(
        (p) => p.projeto_id !== idProjeto
      );
    });
    this.openedDropdownProjetoId = null;
  }

  // Método para alternar o estado do dropdown com base no projeto selecionado
  toggleDropdown(projetoId: number | undefined) {
    const id = projetoId !== undefined ? projetoId : null;
    // Verifica se o dropdown atualmente aberto é o mesmo do projetoId recebido
    if (this.openedDropdownProjetoId === id) {
      this.openedDropdownProjetoId = null; // Fecha o dropdown se já estiver aberto
    } else {
      this.openedDropdownProjetoId = id; // Abre o dropdown se estiver fechado
    }
  }
  
  onSelect(projeto: Projeto): void {
    const id = projeto.projeto_id
    this.router.navigate(['/disciplinas', id]);
  }

  detalharProjeto(projeto: Projeto) {
    if (!this.projetoSelecionado) {
      this.projetoService.setProjetoSelecionado(projeto);
      this.projetoSelecionado = projeto;
    }
  }

}
