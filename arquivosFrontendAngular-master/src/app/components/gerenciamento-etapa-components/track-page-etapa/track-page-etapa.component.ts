import { Component } from '@angular/core';
import { Disciplina } from '../../../interface/disciplina';
import { DisciplinaService } from '../../../service/disciplina.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-page-etapa',
  standalone: true,
  imports: [],
  templateUrl: './track-page-etapa.component.html',
  styleUrl: './track-page-etapa.component.css'
})
export class TrackPageEtapaComponent {

  disciplinas: Disciplina[] = [];

  constructor(private disciplinaService: DisciplinaService,
    private activateRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.CarregarDisciplinaById(Number(this.activateRouter.snapshot.paramMap.get('id')))
  }

  CarregarDisciplinaById(idDisciplina: number) {
    this.disciplinaService.getDisciplinaById(idDisciplina).subscribe({
      next: (disciplina) => {
        this.disciplinas = [disciplina];
      },
      error: (error) => console.log(error)
    });
  }

}
