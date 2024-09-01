import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class FiltroService {
  private termoPesquisa = new BehaviorSubject<string>('');
  private criterioOrdenacao = new BehaviorSubject<string>('');
  private statusSelecionado = new BehaviorSubject<number[]>([]);
  private ultimaModificacao = new BehaviorSubject<string>('');
  private tiposArquivo = new BehaviorSubject<string[]>([]);


  atualizarTermoPesquisa(novoValor: string) {
    this.termoPesquisa.next(novoValor);
  }

  obterTermoPesquisa(): Observable<string> {
    return this.termoPesquisa.asObservable();
  }

  atualizarCriterioOrdenacao(novoValor: string) {
    this.criterioOrdenacao.next(novoValor);
  }

  obterCriterioOrdenacao(): Observable<string> {
    return this.criterioOrdenacao.asObservable();
  }
  atualizarStatusSelecionado(novoStatus: number[]) {
    this.statusSelecionado.next(novoStatus);
  }

  obterStatusSelecionado(): Observable<number[]> {
    return this.statusSelecionado.asObservable();
  }

  atualizarUltimaModificacao(novaData: string) {
    this.ultimaModificacao.next(novaData);
  }

  obterUltimaModificacao(): Observable<string> {
    return this.ultimaModificacao.asObservable();
  }

  atualizarTiposArquivoSelecionados(novosTipos: string[]) {
    this.tiposArquivo.next(novosTipos);
  }

  obterTiposArquivoSelecionados(): Observable<string[]> {
    return this.tiposArquivo.asObservable();
  }
}
