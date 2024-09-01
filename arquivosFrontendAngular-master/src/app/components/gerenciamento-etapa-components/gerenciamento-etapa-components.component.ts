import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Etapa } from '../../interface/etapa';
import { EtapaService } from '../../service/etapa.service';
import { ModalEditEtapaComponent } from "./modal-edit-etapa/modal-edit-etapa.component";
import { CommonModule } from '@angular/common';
import { ModalEditDisciplinaComponent } from "../gerenciamento-disciplina-components/modal-edit-disciplina/modal-edit-disciplina.component";
import { ProjetoService } from '../../service/projeto.service';

@Component({
  selector: 'app-gerenciamento-etapa-components',
  standalone: true,
  templateUrl: './gerenciamento-etapa-components.component.html',
  styleUrls: ['./gerenciamento-etapa-components.component.css'],
  imports: [CommonModule, RouterModule, ModalEditEtapaComponent, ModalEditDisciplinaComponent]
})
export class GerenciamentoEtapaComponentsComponent implements OnInit {

  etapas: Etapa[] = [];
  etapaSelecionada: Etapa | null = null;

  constructor(private etapaService: EtapaService,
    private projetoService: ProjetoService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.CarregarEtapasDeDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(Number(this.activateRouter.snapshot.paramMap.get('id')), Number(sessionStorage.getItem('id')))
  }

  CarregarEtapasDeDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idDisciplina: number, idUsuario: number) {
    this.etapaService.getEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario, idDisciplina).subscribe({
      next: (etapa) => {
        this.etapas = etapa;
      },
      error: (error) => console.log(error)
    });
  }

  deletarEtapa(idEtapa: number): void {
    this.etapaService.excluirEtapa(idEtapa).subscribe(() => {
      this.etapas = this.etapas.filter(e => e.etapa_id !== idEtapa);
    });
  }

  onSelect(etapa: Etapa): void {
    const id = etapa.etapa_id
    this.router.navigate(['/arquivos', id]);
  }

  detalharEtapa(etapa: Etapa) {
    if (!this.etapaSelecionada) {
      this.etapaService.setEtapaSelecionada(etapa);
      this.etapaSelecionada = etapa;
    }
  }

}
