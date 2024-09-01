import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Disciplina } from '../../../interface/disciplina';
import { Subscription } from 'rxjs';
import { DisciplinaService } from '../../../service/disciplina.service';

@Component({
  selector: 'app-modal-edit-disciplina',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modal-edit-disciplina.component.html',
  styleUrl: './modal-edit-disciplina.component.css'
})
export class ModalEditDisciplinaComponent {

  disciplinaSelecionada: Disciplina | null = null;
  subscription: Subscription;
  modalOpen = false;
  disciplina: Disciplina | null = null;

  disciplinaForm = new FormGroup({
    disciplina_id: new FormControl<number | null>(null, Validators.required),
    disciplina_descricao: new FormControl<string | null>('', Validators.required),
    disciplina_status: new FormControl<number | null>(null, Validators.required),
  });

  constructor(private disciplinaService: DisciplinaService) {
    this.subscription = this.disciplinaService.disciplinaSelecionada$.subscribe(
      disciplina => {
        this.disciplinaSelecionada = disciplina;
        if (disciplina && disciplina.disciplina_id !== undefined) {
          this.buscarDisciplinaPorId(disciplina.disciplina_id.toString());
        }
      }
    );
  }

  ngOnInit() {
    // Chame a função aqui ou em algum outro evento, se necessário
  }

  ngOnDestroy() {
    // Limpeza da inscrição para evitar vazamentos de memória
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  buscarDisciplinaPorId(disciplinaId: string) {
    const id = Number(disciplinaId); // Converte o ID para número
    if (isNaN(id)) {
      return;
    }
    this.disciplinaService.getDisciplinaById(id).subscribe(
      (data) => {
        console.log("ID da disciplina:", id);
        this.disciplina = data;
        this.disciplinaForm.patchValue({
          disciplina_id: data.disciplina_id ?? null,
          disciplina_descricao: data.disciplina_descricao ?? '',
          disciplina_status: data.disciplina_status ?? null,
        });
        console.log("Disciplina:", data); // Certifique-se de que o projeto foi buscado com sucesso
      },
      (error) => {
        console.error("Erro ao buscar a disciplina:", error);
      }
    );
  }

  onSubmit() {
    if (this.disciplinaForm.valid) {
      const disciplinaId = this.disciplinaForm.value.disciplina_id;
      if (disciplinaId !== null && disciplinaId !== undefined) { // Verificação adicional
        this.disciplinaService.atualizarDisciplina(this.disciplinaForm.value as Disciplina, disciplinaId).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => console.log(error),
        });
      } else {
        console.error("O ID da disciplina é indefinido ou inválido.");
      }
    } else {
      console.error("O formulário não é válido.");
    }
  }


  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
