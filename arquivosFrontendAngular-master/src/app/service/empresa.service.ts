import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { Empresa } from "../interface/empresa";

import { ArquivoUsuario } from "../interface/arquivo-usuario";



@Injectable({
    providedIn:'root'
})
export class EmpresaService{

    private readonly baseUrl: string;

    constructor(private http: HttpClient) {
      this.baseUrl = environment.apiServer + 'Empresa';
    }
;
    getEmpresa(): Observable<any>{
      return this.http.get<any[]>(this.baseUrl).pipe(
        catchError(this.handleError) // Handle potential errors
      );
    }

    getEmpresaById(id: number): Observable<Empresa> {
      return this.http.get<Empresa>(`${this.baseUrl}/${id}`).pipe(
        catchError(this.handleError) // Handle potential errors
      );
    }

    getEmpresaByUsuarioId(id: number): Observable<Empresa[]> {
      return this.http.get<Empresa[]>(`${this.baseUrl}/empresaByUsuarioId/${id}/2`).pipe(
        catchError(this.handleError) // Handle potential errors
      );
    }
    getProjetoByUsuarioId(id: number): Observable<ArquivoUsuario[]> {
      return this.http.get<ArquivoUsuario[]>(`${this.baseUrl}/projeto/disciplinas/usuario/${id}`).pipe(
        catchError(this.handleError)
      );
    }

    getEmpresaByNome(nomeEmpresa: string): Observable<Empresa[]> {
      return this.http.get<Empresa[]>(`${this.baseUrl}/empresaByNome/${nomeEmpresa}`).pipe(
        catchError(this.handleError) // Handle potential errors
      );
    }

    private handleError(error: any): Observable<never> {
      // Use 'never' instead of 'void' for error handling
      let errorMessage: string;
      if (error.error instanceof ErrorEvent) {
        // Erro do lado do cliente ou da rede. Trate de acordo com a necessidade.
        errorMessage = 'Ocorreu um erro: ' + error.error.message;
      } else {
        // O backend retornou um código de resposta sem sucesso.
        // O corpo da resposta pode conter pistas sobre o que deu errado.
        errorMessage = `O backend retornou o código ${error.status}: ${error.message}`;
      }
      console.error(errorMessage); // Registra o erro no console
      return throwError(errorMessage); // Dispara um novo erro como um observável
    }


}
