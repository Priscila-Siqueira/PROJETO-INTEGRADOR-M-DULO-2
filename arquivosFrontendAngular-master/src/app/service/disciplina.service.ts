import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { BehaviorSubject, Observable, catchError, throwError } from "rxjs";
import { Disciplina } from "../interface/disciplina";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly baseUrl: string;

  private disciplinaSelecionadaSubject = new BehaviorSubject<Disciplina | null>(null);
  disciplinaSelecionada$ = this.disciplinaSelecionadaSubject.asObservable();

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer + 'disciplina';
  }

  cadastrarDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.baseUrl, disciplina).pipe(
      catchError(this.handleError)
    );
  }

  getDisciplinas(): Observable<any> {
    return this.http.get<Disciplina[]>(this.baseUrl).pipe(
      catchError(this.handleError) // Handle potential errors
    );
  }

  getDisciplinaById(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError) // Handle potential errors
    );
  }

  atualizarDisciplina(disciplina: Disciplina, idDisciplina: number): Observable<Disciplina> {
    return this.http.put<Disciplina>(`${this.baseUrl}/${idDisciplina}`, disciplina).pipe(
      catchError(this.handleError)
    );
  }

  excluirDisciplina(id: number): Observable<void> {
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

  /* ======================= Services Baseados no Usuário ====================== */

  getDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idUsuario: number, idProjeto: number): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.baseUrl}/disciplinasDeProjetoIdDaEmpresaDoUsuarioId/${idUsuario}/${idProjeto}`).pipe(
      catchError(this.handleError)
    );
  }
  getDisciplinasDeProjetoId(idProjeto: number): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.baseUrl}/projeto/${idProjeto}`).pipe(
      catchError(this.handleError)
    );
  }

  /* ======================== Service para comunicação de componentes =========== */

  setDisciplinaSelecionada(disciplina: Disciplina | null) {
    this.disciplinaSelecionadaSubject.next(disciplina);
  }

}

