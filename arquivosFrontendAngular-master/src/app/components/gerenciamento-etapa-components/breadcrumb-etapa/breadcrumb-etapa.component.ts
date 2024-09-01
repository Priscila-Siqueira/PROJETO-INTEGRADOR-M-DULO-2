import { Component } from '@angular/core';
import { ModalMudarAcessoComponent } from "../../gerenciamento-arquivos-components/modal-mudar-acesso/modal-mudar-acesso.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-breadcrumb-etapa',
    standalone: true,
    templateUrl: './breadcrumb-etapa.component.html',
    styleUrl: './breadcrumb-etapa.component.css',
    imports: [ModalMudarAcessoComponent, RouterModule]
})
export class BreadcrumbEtapaComponent {

}
