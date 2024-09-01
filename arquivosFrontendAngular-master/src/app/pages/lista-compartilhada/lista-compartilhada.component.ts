import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BarraPesquisaComponent } from '../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component';
import { ModalButtonComponent } from '../../components/gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { TabelaListaCompartilhadaComponent } from '../../components/lista-compartilhada/tabela-lista-compartilhada.component';
import { BtnListaCompartilhadaComponent } from '../../components/btn-lista-compartilhada/btn-lista-compartilhada.component';
import { BtnGrupoListaCompartilhadaComponent } from '../../components/btn-grupo-lista-compartilhada/btn-grupo-lista-compartilhada.component';
import { SearchListaCompartilhadaComponent } from '../../components/search-lista-compartilhada/search-lista-compartilhada.component';
import { TrackPageListaCompartilhadaComponent } from '../../components/track-page-lista-compartilhada/track-page-lista-compartilhada.component';

@Component({
  selector: 'app-lista-compartilhada',
  standalone: true,
  imports: [
    NavbarComponent,
    BarraPesquisaComponent,
    ModalButtonComponent,
    MenuLateralComponent,
    TabelaListaCompartilhadaComponent,
    BtnListaCompartilhadaComponent,
    BtnGrupoListaCompartilhadaComponent,
    SearchListaCompartilhadaComponent,
    TrackPageListaCompartilhadaComponent,
  ],
  templateUrl: './lista-compartilhada.component.html',
  styleUrl: './lista-compartilhada.component.css',
})
export class ListaCompartilhadaComponent {}
