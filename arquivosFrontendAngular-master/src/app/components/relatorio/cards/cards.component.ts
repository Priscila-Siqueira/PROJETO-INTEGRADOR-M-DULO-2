import { Component, Input, OnInit, input } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { ArquivoService } from '../../../service/arquivo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  @Input() listaArquivos: Arquivo[] = []
  @Input() listaArquivosAprovados: Arquivo[] = []
  @Input() listaArquivosReprovados: Arquivo[] = []
  @Input() listaArquivosPendentes: Arquivo[] = []
  @Input() listaUsuarios: any[] = []
  @Input() listaUsuariosAtivos: any[] = []
  @Input() listaEmpresas: any[] = []
  @Input() listaProjetos: any[] = []

  tamanhoTotalProjeto: number | null = null;

    constructor(private arquivoService: ArquivoService){}

    ngOnInit(): void {
      this.carregarDadosDoProjeto(4); // substitua 123 pelo ID do projeto desejado
    }
    carregarDadosDoProjeto(projetoId: number): void {
      this.arquivoService.getArquivosSizeByProjetoId(projetoId).subscribe({
        next: (dados) => {
          console.log('Dados recebidos:', dados); // Loga a resposta para diagnóstico
          if (dados && dados.length > 0 && dados[0].tamanho_total_projeto !== null) {
            this.tamanhoTotalProjeto = parseInt(dados[0].tamanho_total_projeto);
          } else {
            console.error('Nenhum dado válido foi retornado para este projeto.');
            this.tamanhoTotalProjeto = null;
          }
        },
        error: (erro) => {
          console.error('Erro ao obter dados do projeto:', erro);
          this.tamanhoTotalProjeto = null;
        }
      });
    }

}
