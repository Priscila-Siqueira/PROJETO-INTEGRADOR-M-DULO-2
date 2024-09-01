import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, delay } from 'rxjs'
import { Router } from '@angular/router';
import { Email } from '../interface/email';
import { Token } from '../interface/token';
import { JWT_Token } from '../interface/jwt_token';
import { EmailTokenRecebido } from '../interface/emailtoken_recebido';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private readonly baseUrl: string;

  constructor(private jwtHelper: JwtHelperService, private http:HttpClient, private router: Router) {
    this.baseUrl = environment.apiServer;
  }


  loginEmail(email:Email):Observable<EmailTokenRecebido>{
    const obs = this.http.post<EmailTokenRecebido>(this.baseUrl+'auth/login_email',email)
    // if(obs){
    //   if( !this.getTokenByEmail(email).subscribe()){
    //       this.gerarToken(email).subscribe()
    //   }

    // }
    return obs

  }

  private gerarToken(email:string):Observable<Token>{
    var aleatorio = Math.random().toString(36).substring(2);
    var token = new Token(aleatorio,email)
    return this.http.post<Token>(this.baseUrl + 'token/', JSON.stringify(token), httpOptions)
  }

  getTokenByEmail(email:string):Observable<Token>{
    return this.http.get<Token>(this.baseUrl+'token?email='+email)
  }

  loginToken(token:Token):Observable<JWT_Token>{
    return this.http.post<JWT_Token>(this.baseUrl+'auth/login_token', token)
  }

  verificarJWTToken(jwt:JWT_Token):Observable<Boolean>{
    return this.http.post<Boolean>(this.baseUrl+'auth/check_jwt',jwt)
  }
  
}
