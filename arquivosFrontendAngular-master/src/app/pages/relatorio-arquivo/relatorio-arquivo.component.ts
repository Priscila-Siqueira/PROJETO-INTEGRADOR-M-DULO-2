import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { TabelaComponent } from '../../components/relatorio/tabela/tabela.component';
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";

@Component({
    selector: 'app-relatorio-arquivo',
    standalone: true,
    templateUrl: './relatorio-arquivo.component.html',
    styleUrl: './relatorio-arquivo.component.css',
    imports: [NavbarComponent, TabelaComponent, MenuLateralComponent]
})
export class RelatorioArquivoComponent {

}
