import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';
import { EmpresaService } from '../../../service/empresa.service';
import { Empresa } from '../../../interface/empresa';

@Component({
  selector: 'app-modal-create-projeto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-create-projeto.component.html',
  styleUrl: './modal-create-projeto.component.css'
})
export class ModalCreateProjetoComponent {

  modalOpen = false;
  empresa: Empresa | undefined;

  projetoForm = new FormGroup({
    projeto_descricao: new FormControl('', Validators.required),
    projeto_orcamento: new FormControl('', Validators.required),
    empresa_id: new FormControl(Number(sessionStorage.getItem('empresaId')), Validators.required),
    projeto_status: new FormControl(1, Validators.required)
  });

  constructor(private projetoService: ProjetoService, private empresaService: EmpresaService) { }

  ngOnInit(): void {
    const empresaId = Number(sessionStorage.getItem('empresaId'));
    if (empresaId) {
      this.carregarEmpresaPorId(empresaId);
    }
  }

  onSubmit() {
    console.log(this.projetoForm.value);
    this.projetoService.cadastrarProjeto(<Projeto><unknown>this.projetoForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.closeModal();
      },
      error: (error) => console.log(error),
    })
  }

  carregarEmpresaPorId(id: number): void {
    this.empresaService.getEmpresaById(id)
      .subscribe(
        (empresa: Empresa) => {
          this.empresa = empresa;
        },
      );
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
