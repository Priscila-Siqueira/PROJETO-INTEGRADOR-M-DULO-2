import { Component } from '@angular/core';
import { ModalMudarAcessoComponent } from "../../gerenciamento-arquivos-components/modal-mudar-acesso/modal-mudar-acesso.component";

@Component({
    selector: 'app-breadcrumb-disciplina',
    standalone: true,
    templateUrl: './breadcrumb-disciplina.component.html',
    styleUrl: './breadcrumb-disciplina.component.css',
    imports: [ModalMudarAcessoComponent]
})
export class BreadcrumbDisciplinaComponent {

}
