import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';import { DisciplinaService } from '../../../service/disciplina.service';
import { Disciplina } from '../../../interface/disciplina';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-create-disciplina',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-create-disciplina.component.html',
  styleUrl: './modal-create-disciplina.component.css'
})
export class ModalCreateDisciplinaComponent {

  modalOpen = false;
  projetos: Projeto[] = [];

  disciplinaForm = new FormGroup({
    disciplina_descricao: new FormControl('', Validators.required),
    projeto_id: new FormControl(parseInt(this.activateRouter.snapshot.paramMap.get('id') || '0', 10), Validators.required),
    disciplina_status: new FormControl(1, Validators.required),
  });

  constructor(private disciplinaService: DisciplinaService,
    private projetoService: ProjetoService,
    private activateRouter: ActivatedRoute,
  ) {}

  onSubmit() {
    console.log(this.disciplinaForm.value);
    this.disciplinaService.cadastrarDisciplina(<Disciplina><unknown>this.disciplinaForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.closeModal();
      },
      error: (error) => console.log(error),
    })
  }

  CarregarProjetoById(idProjeto: number) {
    this.projetoService.getProjetoById(idProjeto).subscribe({
      next: (projeto) => {
        this.projetos = [projeto]; // Coloque o projeto em um array
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
