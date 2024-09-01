import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtapaService } from '../../../service/etapa.service';
import { Etapa } from '../../../interface/etapa';
import { DisciplinaService } from '../../../service/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { Disciplina } from '../../../interface/disciplina';

@Component({
  selector: 'app-modal-create-etapa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-create-etapa.component.html',
  styleUrl: './modal-create-etapa.component.css'
})
export class ModalCreateEtapaComponent {

  modalOpen = false;
  disciplinas: Disciplina[] = [];

  etapaForm = new FormGroup({
    etapa_descricao: new FormControl('', Validators.required),
    etapa_status: new FormControl(1, Validators.required),
    disciplina_id: new FormControl(parseInt(this.activateRouter.snapshot.paramMap.get('id') || '0', 10), Validators.required),
    etapa_id_pai: new FormControl(4, Validators.required),
  });

  constructor(private etapaService: EtapaService,
    private disciplinaService: DisciplinaService,
    private activateRouter: ActivatedRoute
  ) { }

  onSubmit() {
    console.log(this.etapaForm.value);
    this.etapaService.cadastrarEtapa(<Etapa>this.etapaForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.closeModal();
      },
      error: (error) => console.log(error),
    })
  }

  CarregarDisciplinaById(idDisciplina: number) {
    this.disciplinaService.getDisciplinaById(idDisciplina).subscribe({
      next: (disciplina) => {
        this.disciplinas = [disciplina];
      },
      error: (error) => console.log(error)
    });
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
