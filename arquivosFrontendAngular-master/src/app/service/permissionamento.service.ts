import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permissionamento } from '../interface/permissionamento';
import { PermissionamentoUsuario } from '../interface/permissionamento-usuario';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PermissionamentoService {

  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
      this.baseUrl = environment.apiServer + 'permissionamento';
  }

    private selectedObject: any;

  setSelectedObject(obj: any): void {
    this.selectedObject = obj;
  }

  getSelectedObject(): any {
    return this.selectedObject;
  }

  post(permissionamento: Permissionamento): Observable<Permissionamento> {
      return this.http.post<Permissionamento>(this.baseUrl, permissionamento, httpOptions).pipe(
          catchError(this.handleError)
      );
  }

  findAll(): Observable<Permissionamento[]> {
      return this.http.get<Permissionamento[]>(this.baseUrl).pipe(
          catchError(this.handleError)
      )
  }

  findOne(id: number): Observable<Permissionamento> {
      return this.http.get<Permissionamento>(`${this.baseUrl}/${id}`).pipe(
          catchError(this.handleError)
      );
  }

  patch(id: number, alteracoes: Partial<Permissionamento>): Observable<Permissionamento> {
      return this.http.patch<Permissionamento>(`${this.baseUrl}/${id}`, alteracoes, httpOptions).pipe(
          catchError(this.handleError)
      );
  }

  remove(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
          catchError(this.handleError)
      );
  }

  getProjectById(id: number): Observable<PermissionamentoUsuario[]> {
    return this.http.get<PermissionamentoUsuario[]>(`${environment.apiServer}projeto/projetosDaEmpresaDoUsuarioId/${id}`);
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
