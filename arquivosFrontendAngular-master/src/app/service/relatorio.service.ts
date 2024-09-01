import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Relatorio } from '../interface/relatorio';
import { environment } from '../../environments/environment';
import { Arquivo } from '../interface/arquivo';
import { ProjetoComDisciplinas } from '../interface/ProjetoComDisciplinas';
import { Projeto } from '../interface/projeto';
import { Empresa } from '../interface/empresa';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private baseUrl = 'http://academico3.rj.senac.br'; // URL base ajustada

  constructor(private http: HttpClient) {}

  findProjetosDaEmpresaId(idEmpresa: number): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(`${this.baseUrl}/projeto/empresa/${idEmpresa}`)

  }

  getProjetosComDisciplinas(idEmpresa: number): Observable<ProjetoComDisciplinas[]> {
    return this.http.get<ProjetoComDisciplinas[]>(`${this.baseUrl}/projeto/empresa/${idEmpresa}/disciplinas`);
  }

  getEmpresa(): Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/empresa`);
  }

}
