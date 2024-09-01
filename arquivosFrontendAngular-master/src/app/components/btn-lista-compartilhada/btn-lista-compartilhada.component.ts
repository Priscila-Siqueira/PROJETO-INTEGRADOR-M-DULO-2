import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { listaCompartilhadaDto } from '../../interface/listaCompartilhadaDto';
import { ListaCompartilhadaService } from '../../service/listaCompartilhada.service';

@Component({
  selector: 'app-btn-lista-compartilhada',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './btn-lista-compartilhada.component.html',
  styleUrls: ['./btn-lista-compartilhada.component.css']
})
export class BtnListaCompartilhadaComponent {
  modalOpen = false;
  listaForm: FormGroup;

  @ViewChild('modalTemplate')
  modalTemplate!: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private listaCompartilhadaService: ListaCompartilhadaService
  ) {
    this.listaForm = this.formBuilder.group({
      lista_compartilhada_descricao: ['', Validators.required],
    });
  }

  openModal() {
    console.log('Abrindo modal');
    this.modalOpen = true;
  }

  closeModal() {
    console.log('Fechando modal');
    this.modalOpen = false;
  }

  submitForm() {
    console.log('Tentando enviar o formulário');
    if (this.listaForm.valid) {
      const listaCompartilhadaData: listaCompartilhadaDto = {
        lista_compartilhada_descricao: this.listaForm.get("lista_compartilhada_descricao")?.value,
        lista_compartilhada_data: new Date(Date.now()),
        lista_compartilhada_status: 1
      };

      console.log('Dados do formulário:', listaCompartilhadaData);



     console.log('Dados a serem enviados para o backend:', listaCompartilhadaData);

      this.listaCompartilhadaService.postListaCompartilhada(listaCompartilhadaData).subscribe(
        (response) => {
          console.log('Dados enviados com sucesso:', response);
          this.closeModal(); // Fechar o modal após o envio
        },
        (error) => {
          console.error('Erro ao enviar dados:', error);
          if (error.error) {
            console.error('Detalhes do erro:', error.error);
          }
        }
      );
    } else {
      console.log('Formulário inválido. Por favor, corrija os campos.');
    }
  }
}
