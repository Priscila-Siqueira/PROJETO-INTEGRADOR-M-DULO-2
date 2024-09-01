import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ModalFiltroPesquisaComponent } from './modal-filtro-pesquisa/modal-filtro-pesquisa.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TagsComponent } from '../modal-enviar-arquivo/tags/tags.component';
import { FiltroService } from '../../../service/filtro.service';


@Component({
  selector: 'app-barra-pesquisa',
  standalone: true,
  imports: [MatButtonModule, TagsComponent, MatIcon],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css'
})
export class BarraPesquisaComponent {
  constructor(public dialog: MatDialog, private filtroService: FiltroService) {}

  openDialog() {
    this.dialog.open(ModalFiltroPesquisaComponent);
  }

  atualizarPesquisa(novoValor: string) {
    this.filtroService.atualizarTermoPesquisa(novoValor);
  }
}


