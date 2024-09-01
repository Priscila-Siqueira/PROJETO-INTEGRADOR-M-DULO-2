import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { BehaviorSubject, Observable, catchError, throwError } from "rxjs";
import { Etapa } from "../interface/etapa";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'aplication/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class EtapaService {
    private readonly baseUrl: string;

    private etapaSelecionadaSubject = new BehaviorSubject<Etapa | null>(null);
    etapaSelecionada$ = this.etapaSelecionadaSubject.asObservable();

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiServer + 'etapa';
    }

    cadastrarEtapa(etapa: Etapa): Observable<Etapa> {
        return this.http.post<Etapa>(this.baseUrl, etapa).pipe(
            catchError(this.handleError)
        );
    }

    getEtapas(): Observable<Etapa[]> {
        return this.http.get<Etapa[]>(this.baseUrl).pipe(
            catchError(this.handleError)
        )
    }

    getEtapaById(id: number): Observable<Etapa> {
        return this.http.get<Etapa>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    atualizarEtapa(etapa: Etapa, idEtapa: number): Observable<Etapa> {
        return this.http.put<Etapa>(`${this.baseUrl}/${idEtapa}`, etapa).pipe(
            catchError(this.handleError)
        );
    }

    excluirEtapa(id: number): Observable<void> {
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

    getEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario: number, idDisciplina: number): Observable<Etapa[]> {
        return this.http.get<Etapa[]>(`${this.baseUrl}/etapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId/${idUsuario}/${idDisciplina}`).pipe(
            catchError(this.handleError)
        );
    }

    getEtapasDaDisciplinaId(idDisciplina: number): Observable<Etapa[]> {
        return this.http.get<Etapa[]>(`${this.baseUrl}/disciplina/${idDisciplina}`).pipe(
            catchError(this.handleError)
        );
    }

    /* ======================== Service para comunicação de componentes =========== */

    setEtapaSelecionada(etapa: Etapa | null) {
        this.etapaSelecionadaSubject.next(etapa);
    }

}
