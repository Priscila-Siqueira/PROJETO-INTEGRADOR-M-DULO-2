import { Component, TemplateRef, ViewChild} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-btn-grupo-lista-compartilhada',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatDialogModule],
  templateUrl: './btn-grupo-lista-compartilhada.component.html',
  styleUrl: './btn-grupo-lista-compartilhada.component.css'
})
export class BtnGrupoListaCompartilhadaComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
  ){}

  openModal(){
    this.dialog.open(this.modalTemplate);
  }
}
