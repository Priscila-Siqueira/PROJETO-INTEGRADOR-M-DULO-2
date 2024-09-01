import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('logado');
    sessionStorage.removeItem('jwt');
    this.router.navigate(['']);
  
  }
}
