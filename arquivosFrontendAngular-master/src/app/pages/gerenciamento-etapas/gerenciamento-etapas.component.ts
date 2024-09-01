import { MenuLateralComponent } from './../../components/menu-lateral/menu-lateral.component';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BreadcrumbEtapaComponent } from "../../components/gerenciamento-etapa-components/breadcrumb-etapa/breadcrumb-etapa.component";
import { BarraPesquisaEtapaComponent } from "../../components/gerenciamento-etapa-components/barra-pesquisa-etapa/barra-pesquisa-etapa.component";
import { GerenciamentoEtapaComponentsComponent } from "../../components/gerenciamento-etapa-components/gerenciamento-etapa-components.component";
import { BuscarEtapaComponent } from '../../components/gerenciamento-etapa-components/buscar-etapa/buscar-etapa.component'
import { TrackPageEtapaComponent } from '../../components/gerenciamento-etapa-components/track-page-etapa/track-page-etapa.component'
import { ModalCreateEtapaComponent } from "../../components/gerenciamento-etapa-components/modal-create-etapa/modal-create-etapa.component";

@Component({
    selector: 'app-gerenciamento-etapas',
    standalone: true,
    templateUrl: './gerenciamento-etapas.component.html',
    styleUrl: './gerenciamento-etapas.component.css',
    imports: [MenuLateralComponent,
      NavbarComponent,
        BreadcrumbEtapaComponent,
        BarraPesquisaEtapaComponent,
        GerenciamentoEtapaComponentsComponent,
        BuscarEtapaComponent,
        TrackPageEtapaComponent,
        ModalCreateEtapaComponent
    ]
})
export class GerenciamentoEtapasComponent {

}
