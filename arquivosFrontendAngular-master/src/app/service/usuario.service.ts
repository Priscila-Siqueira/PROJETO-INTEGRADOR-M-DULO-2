import { Usuario } from './../interface/usuario';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, throwError } from "rxjs";
import { environment } from '../../environments/environment.development';
import { CreateUsuarioDTO } from '../interface/create-usuario-dto';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  })
};




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {




  private readonly baseUrl: string;




  private usuarioAutenticadoSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();


  private autorSelecionadoSubject = new BehaviorSubject<Usuario | null>(null);
  autor$ = this.autorSelecionadoSubject.asObservable();

  private revisorSelecionadoSubject = new BehaviorSubject<Usuario | null>(null);
  revisor$ = this.revisorSelecionadoSubject.asObservable();




  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer + 'usuario';
  }




  findAll() : Observable<Usuario[]>  {
    return this.http.get<Usuario[]>(this.baseUrl, httpOptions)
  }




  findByid(id: number | undefined): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`, httpOptions)
  }




  setAutor(usuario: Usuario | null) {
    this.autorSelecionadoSubject.next(usuario);
  }




  setRevisor(usuario: Usuario | null) {
    this.revisorSelecionadoSubject.next(usuario);
  }




  getUsuariosPorEmpresaId(idEmpresa: number){
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarioByEmpresaId/${idEmpresa}`, httpOptions)
  }




  getUsuarioPorEmail(email: string | null){
    return this.http.get<Usuario>(`${this.baseUrl}/usuarioByEmail/${email}`, httpOptions)
  }




  /* ======================== Service para comunicação de componentes=========== */

  getUsuarioAutenticado(): Observable<Usuario | null> {
    return this.usuarioAutenticado$;
  }

  setUsuarioAutenticado(usuario: Usuario | null) {
    this.usuarioAutenticadoSubject.next(usuario);
  }
  criarUsuario(usuario: CreateUsuarioDTO): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario,httpOptions)
  }




  deletarUsuario(id:number){
    return this.http.delete(this.baseUrl+ "/"+id)
  }




  editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/${usuario.usuario_id}`, usuario, httpOptions);
  }




  // private handleError(error: any): Observable<never> {
  //   let errorMessage: string;
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = 'Ocorreu um erro: ' + error.error.message;
  //   } else {
  //     errorMessage = `O backend retornou o código ${error.status}: ${error.message}`
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }
}
