import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { CommonModule, formatDate } from '@angular/common';
import * as XLSX from 'xlsx';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjetoComDisciplinas } from '../../../interface/ProjetoComDisciplinas';
import { Projeto } from '../../../interface/projeto';
import { forkJoin } from 'rxjs';
import { RelatorioService } from '../../../service/relatorio.service';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";



@Component({
    selector: 'app-tabela',
    standalone: true,
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.css'],
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, BreadcrumbComponent]
})
export class TabelaComponent implements OnInit {
    listaArquivos: Arquivo[] = [];
    projetosDisciplinas: ProjetoComDisciplinas[] = [];
    empresaControl = new FormControl();
    projetos: (Projeto & { disciplinas_ativas: number; disciplinas_inativas: number; projeto_status: number; })[] = [];
    dadosCarregados = false;
   constructor(private relatorioService: RelatorioService) {}

   ngOnInit(): void {
    this.loadDados(4);
  }

  loadDados(idEmpresa: number): void {
    forkJoin({
      projetosBasicos: this.relatorioService.findProjetosDaEmpresaId(idEmpresa),
      projetosComDisciplinas: this.relatorioService.getProjetosComDisciplinas(idEmpresa)
    }).subscribe({
      next: ({ projetosBasicos, projetosComDisciplinas }) => {
        this.projetos = projetosBasicos.map(projeto => {
          const disciplinas = projetosComDisciplinas.find(p => p.projeto_id === projeto.projeto_id) || {
            disciplinas_ativas: 0,
            disciplinas_inativas: 0
          };
          return {
            ...projeto,
            disciplinas_ativas: disciplinas.disciplinas_ativas,
            disciplinas_inativas: disciplinas.disciplinas_inativas
          };
        });
        this.dadosCarregados = true; // Correto: definindo dentro do subscribe
      },
      error: error => {
        console.error('Erro ao carregar dados:', error);
        this.dadosCarregados = false;
      }
    });
  }


  GerarRelatorio(): void {


    const headers: string[] = ['Projeto', 'Disciplinas Ativas', 'Disciplinas Inativas', 'Data de Início', 'Data de Fim', 'Orçamento', 'Status'];
    const dadosTabela: any[] = this.projetos.map(projeto => [
      projeto.projeto_descricao,
      projeto.disciplinas_ativas,
      projeto.disciplinas_inativas,
      projeto.projeto_data_inicio ? new Date(projeto.projeto_data_inicio).toLocaleDateString('pt-BR') : '',
      projeto.projeto_data_fim ? new Date(projeto.projeto_data_fim).toLocaleDateString('pt-BR') : '',
      projeto.projeto_orcamento ? `R$ ${projeto.projeto_orcamento.toLocaleString('pt-BR')}` : 'Não informado',
      projeto.projeto_status === 1 ? 'Ativo' : 'Inativo'
    ]);

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([headers].concat(dadosTabela));
    ws['!cols'] = [
      { wch: 40 }, { wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 20 }, { wch: 10 }
    ];
    XLSX.utils.book_append_sheet(wb, ws, 'Relatório de Projetos');

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = 'relatorio_projetos.xlsx';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
