import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { listaCompartilhada } from "../interface/listaCompartilhada";
import { listaCompartilhadaDto } from "../interface/listaCompartilhadaDto";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ListaCompartilhadaService {
  private readonly baseUrl: string;

  constructor(private httpCliente: HttpClient) {
    this.baseUrl = environment.apiServer+'lista-compartilhada';
  }

  getListaCompartilhada(): Observable<any> {
    return this.httpCliente.get<any>(`${this.baseUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  postListaCompartilhada(listacompartilhada: listaCompartilhadaDto): Observable<listaCompartilhada> {
    console.log('Dados a serem enviados para o backend:', listacompartilhada);
    return this.httpCliente.post<listaCompartilhada>(this.baseUrl, listacompartilhada, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addArquivoToListaCompartilhada(usuario_id: number, lista_compartilhada_id: number, arquivos: string[]): Observable<void>{
    return this.httpCliente.post<any>(`${this.baseUrl}/addArquivoToListaCompartilhada/${usuario_id}/${lista_compartilhada_id}`, arquivos,httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getArquivosListaCompartilhada(lista_compartilhada_id: string | null): Observable<any>{
    const usuarioIdLogado = String(sessionStorage.getItem('id'));
    return this.httpCliente.get<any>(`${this.baseUrl}/arquivosListaCompartilhada${usuarioIdLogado}/${lista_compartilhada_id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
