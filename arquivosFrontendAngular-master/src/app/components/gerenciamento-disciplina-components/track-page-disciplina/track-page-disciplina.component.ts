import { Component } from '@angular/core';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-track-page-disciplina',
  standalone: true,
  imports: [],
  templateUrl: './track-page-disciplina.component.html',
  styleUrl: './track-page-disciplina.component.css'
})
export class TrackPageDisciplinaComponent {

  projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService,
    private activateRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.CarregarProjetoById(Number(this.activateRouter.snapshot.paramMap.get('id')))
  }

  CarregarProjetoById(idProjeto: number) {
    this.projetoService.getProjetoById(idProjeto).subscribe({
      next: (projeto) => {
        this.projetos = [projeto]; // Coloque o projeto em um array
      },
      error: (error) => console.log(error)
    });
  }
}
