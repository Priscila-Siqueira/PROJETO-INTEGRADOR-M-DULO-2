import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Empreendimento } from '../interface/empreendimento';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmpreendimentoService {

  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
      this.baseUrl = environment.apiServer + 'empreendimento';
  }

  post(empreendimento: Empreendimento): Observable<Empreendimento> {
      return this.http.post<Empreendimento>(this.baseUrl, empreendimento, httpOptions).pipe(
          catchError(this.handleError)
      );
  }

  findAll(): Observable<Empreendimento[]> {
      return this.http.get<Empreendimento[]>(this.baseUrl).pipe(
          catchError(this.handleError)
      )
  }

  findOne(id: number): Observable<Empreendimento> {
      return this.http.get<Empreendimento>(`${this.baseUrl}/${id}`).pipe(
          catchError(this.handleError)
      );
  }

  patch(id: number, alteracoes: Partial<Empreendimento>): Observable<Empreendimento> {
      return this.http.patch<Empreendimento>(`${this.baseUrl}/${id}`, alteracoes, httpOptions).pipe(
          catchError(this.handleError)
      );
  }

  remove(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
          catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
      let errorMessage: string;
      if (error.error instanceof ErrorEvent) {
          errorMessage = 'Ocorreu um erro: ' + error.error.message;
      } else {
          errorMessage = `O backend retornou o código ${error.status}: ${error.message}`
      }
      console.error(errorMessage);
      return throwError(errorMessage);
  }
}
