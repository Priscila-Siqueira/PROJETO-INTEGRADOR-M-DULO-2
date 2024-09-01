import { Component } from '@angular/core';
import { EtapaService } from '../../../service/etapa.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Etapa } from '../../../interface/etapa';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-edit-etapa',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modal-edit-etapa.component.html',
  styleUrl: './modal-edit-etapa.component.css'
})
export class ModalEditEtapaComponent {

  etapaSelecionada: Etapa | null = null;
  subscription: Subscription;
  modalOpen = false;
  etapa: Etapa | null = null;

  etapaForm = new FormGroup({
    etapa_id: new FormControl<number | null>(null, Validators.required),
    etapa_descricao: new FormControl<string | null>('', Validators.required),
    etapa_status: new FormControl<number | null>(null, Validators.required),
  });

  constructor(private etapaService: EtapaService) {
    this.subscription = this.etapaService.etapaSelecionada$.subscribe(
      etapa => {
        this.etapaSelecionada = etapa;
        if (etapa && etapa.etapa_id !== undefined) {
          this.buscarEtapaPorId(etapa.etapa_id.toString());
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

  buscarEtapaPorId(etapaId: string) {
    const id = Number(etapaId); // Converte o ID para número
    if (isNaN(id)) {
      return;
    }
    this.etapaService.getEtapaById(id).subscribe(
      (data) => {
        console.log("ID da etapa:", id);
        this.etapa = data;
        this.etapaForm.patchValue({
          etapa_id: data.etapa_id ?? null,
          etapa_descricao: data.etapa_descricao ?? '',
          etapa_status: data.etapa_status ?? null,
        });
        console.log("Etapa:", data);
      },
      (error) => {
        console.error("Erro ao buscar a etapa:", error);
      }
    );
  }

  onSubmit() {
    if (this.etapaForm.valid) {
      const etapaId = this.etapaForm.value.etapa_id;
      if (etapaId !== null && etapaId !== undefined) { // Verificação adicional
        this.etapaService.atualizarEtapa(this.etapaForm.value as Etapa, etapaId).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => console.log(error),
        });
      } else {
        console.error("O ID da etapa é indefinido ou inválido.");
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
