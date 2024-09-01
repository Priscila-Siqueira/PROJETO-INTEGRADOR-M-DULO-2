import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { listaCompartilhada } from '../../interface/listaCompartilhada';
import { ListaCompartilhadaService } from '../../service/listaCompartilhada.service';
import { CommonModule } from '@angular/common';
import { listaCompartilhadaArquivo } from '../../interface/listaCompartilhadaArquivo';



@Component({
    selector: 'tabela-app-lista-compartilhada',
    standalone: true,
    templateUrl: './tabela-lista-compartilhada.component.html',
    styleUrls: ['./tabela-lista-compartilhada.component.css'],
    imports: [CommonModule, RouterLink, RouterOutlet, MatDialogModule]
})
export class TabelaListaCompartilhadaComponent implements OnInit {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(
    private listaCompartilhadaService: ListaCompartilhadaService,
    private router: Router,
  ){}


  listaCompartilhada: listaCompartilhada[] = [];

  ngOnInit(): void {
    this.getListaCompartilhada();
    console.log(this.listaCompartilhada);
  }

  getListaCompartilhada(): void {
    this.listaCompartilhadaService.getListaCompartilhada().subscribe({
      next: (response) => {
        response && (this.listaCompartilhada = response)
      },
      error: (error) => console.log(error),
    });
  }

  getStatusDescription(status: number | undefined): string {
    if (status === undefined) {
      return 'Status não definido';
    } else if (status === -1) {
      return 'Deletado';
    } else if (status === 0) {
      return 'Inativo';
    } else if (status === 1) {
      return 'Ativo';
    } else {
      return 'Não definido';
    }
  }

  getUniqueEtapas(lista: listaCompartilhadaArquivo[]): string[] {
    const etapas = lista
      .map(arquivo => arquivo.permissionamento.arquivo?.etapa.etapa_descricao)
      .filter((descricao): descricao is string => descricao !== undefined);
    return Array.from(new Set(etapas));
  }

  getUniqueDisciplinas(lista: listaCompartilhadaArquivo[]): string[] {
    const disciplinas = lista
      .map(arquivo => arquivo.permissionamento.arquivo?.etapa.disciplina.disciplina_descricao)
      .filter((descricao): descricao is string => descricao !== undefined);
    return Array.from(new Set(disciplinas));
  }

  getUniqueProjetos(lista: listaCompartilhadaArquivo[]): string[] {
    const projetos = lista
      .map(arquivo => arquivo.permissionamento.arquivo?.projeto.projeto_descricao)
      .filter((descricao): descricao is string => descricao !== undefined);
    return Array.from(new Set(projetos));
  }

  getQuantidadeArquivos(lista: listaCompartilhadaArquivo[]): number{
    let arquivos = lista
      .map(arquivo => arquivo.permissionamento.arquivo_id)
      .filter((descricao): descricao is string => descricao !== undefined);
    arquivos = Array.from(new Set(arquivos));
    return arquivos.length;
  }

  async redirecionarArquivo(dado:any): Promise<void>{

    const idSelecionado = this.listaCompartilhada.find(lista => lista.lista_compartilhada_id === dado.lista_compartilhada_id);

    if (idSelecionado) {
      await this.router.navigate(['/arquivos'], { queryParams: { listaId: idSelecionado.lista_compartilhada_id } });
  } else {
      console.error('Elemento não encontrado na lista compartilhada.');
  }

  }
}
