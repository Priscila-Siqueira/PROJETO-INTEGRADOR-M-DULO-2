import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { JWT_Token } from '../../interface/jwt_token';

@Component({
  selector: 'app-loginjwt',
  standalone: true,
  imports: [],
  templateUrl: './loginjwt.component.html',
  styleUrl: './loginjwt.component.css'
})
export class LoginjwtComponent {
  constructor(private router:Router, private auth:AuthService){}
  @Input() jwt =''

  ngOnInit(): void {
    const jwtToken = new JWT_Token(this.jwt)
    this.auth.verificarJWTToken(jwtToken).subscribe({
      next:(resposta:Boolean)=>{
        if(resposta){
          sessionStorage.setItem("logado","true");
          sessionStorage.setItem('jwt',this.jwt);
          this.router.navigate(['inicial'])
        }
        else{
          sessionStorage.clear()
          this.router.navigate([''])
        }
      }
    })
    
  }
}
