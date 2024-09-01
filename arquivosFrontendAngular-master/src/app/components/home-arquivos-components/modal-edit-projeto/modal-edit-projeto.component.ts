import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-projeto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-edit-projeto.component.html',
  styleUrls: ['./modal-edit-projeto.component.css']
})
export class ModalEditProjetoComponent implements OnInit, OnDestroy {

  ProjetoSelecionado: Projeto | null = null;
  subscription: Subscription;
  modalOpen = false;
  projeto: Projeto | null = null;

  projetoForm = new FormGroup({
    projeto_id: new FormControl<number | null>(null, Validators.required),
    projeto_descricao: new FormControl<string | null>('', Validators.required),
    projeto_orcamento: new FormControl<number | null>(null, Validators.required),
  });

  constructor(private projetoService: ProjetoService) {
    this.subscription = this.projetoService.projetoSelecionado$.subscribe(
      projeto => {
        this.ProjetoSelecionado = projeto;
        if (projeto && projeto.projeto_id !== undefined) {
          this.buscarProjetoPorId(projeto.projeto_id.toString());
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

  buscarProjetoPorId(projetoId: string) {
    const id = Number(projetoId); // Converte o ID para número
    if (isNaN(id)) {
      return;
    }
    this.projetoService.getProjetoById(id).subscribe(
      (data) => {
        console.log("ID do projeto:", id);
        this.projeto = data;
        this.projetoForm.patchValue({
          projeto_id: data.projeto_id ?? null,
          projeto_descricao: data.projeto_descricao ?? '',
          projeto_orcamento: data.projeto_orcamento ?? null,
        });
        console.log("Projeto:", data); // Certifique-se de que o projeto foi buscado com sucesso
      },
      (error) => {
        console.error("Erro ao buscar o projeto:", error);
      }
    );
  }

  onSubmit() {
    if (this.projetoForm.valid) {
      const projetoId = this.projetoForm.value.projeto_id;
      if (projetoId !== null && projetoId !== undefined) { // Verificação adicional
        this.projetoService.atualizarProjeto(this.projetoForm.value as Projeto, projetoId).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => console.log(error),
        });
      } else {
        console.error("O ID do projeto é indefinido ou inválido.");
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
