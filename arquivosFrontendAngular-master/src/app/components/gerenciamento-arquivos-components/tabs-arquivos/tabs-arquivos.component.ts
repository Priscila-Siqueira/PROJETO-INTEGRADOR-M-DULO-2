import { ActivatedRoute, ParamMap } from '@angular/router';
import { AfterViewInit, Input,Component, OnInit } from '@angular/core';
import ComentarioComponent from '../../comentario/comentario.component';
import { VisualizacaoArquivoComponent } from '../visualizacao-arquivo/visualizacao-arquivo.component'
import { VersoesArquivoComponent } from '../tabela-arquivos/versoes-arquivo/versoes-arquivo.component';
import { TabConvidadosComponent } from '../../lista-compartilhada/tab-convidados/tab-convidados.component';
import { TabGeralComponent } from '../../lista-compartilhada/tab-geral/tab-geral.component';
import { TabVisualizacaoComponent } from '../../lista-compartilhada/tab-visualizacao/tab-visualizacao.component';
import { MarkupComponent } from '../../markup/markup.component';
import { Arquivo } from '../../../interface/arquivo';
import { log } from 'node:console';


@Component({
  selector: 'app-tabs-arquivos',
  standalone: true,
  imports: [ VisualizacaoArquivoComponent, ComentarioComponent, VersoesArquivoComponent, MarkupComponent, TabConvidadosComponent, TabGeralComponent, TabVisualizacaoComponent],
  templateUrl: './tabs-arquivos.component.html',
  styleUrl: './tabs-arquivos.component.css'
})
export class TabsArquivosComponent implements OnInit, AfterViewInit {

  constructor(private router: ActivatedRoute){}

  teste: boolean= true;

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params: ParamMap) => {
      if (params.has('listaId')) {
        this.teste = false;
      }
  });
  }
  
  ngAfterViewInit(): void {
    this.inicializarAbas();
  }

  inicializarAbas() {
    const tabs = document.querySelectorAll('[data-tabs-target]');
    const tabContents = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabContents.forEach(content => {
          content.classList.add('hidden');
        });
        const target = document.querySelector(tab.getAttribute('data-tabs-target')!);
        target!.classList.remove('hidden');
      });
    });
  }
}
