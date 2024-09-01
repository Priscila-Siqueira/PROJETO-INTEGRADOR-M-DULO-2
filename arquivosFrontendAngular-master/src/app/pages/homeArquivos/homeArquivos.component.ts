import { Component, Input, OnInit } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { HomeArquivosComponentsComponent } from '../../components/home-arquivos-components/home-arquivos-components.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { ModalCreateProjetoComponent } from "../../components/home-arquivos-components/modal-create-projeto/modal-create-projeto.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrls: ['./homeArquivos.component.css'],
    imports: [
        ComentarioComponent,
        TabsComponent,
        NavbarComponent,
        MenuLateralComponent,
        HomeArquivosComponentsComponent,
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        BarraPesquisaComponent,
        ModalCreateProjetoComponent
    ]
})
export class HomeComponent {

}
