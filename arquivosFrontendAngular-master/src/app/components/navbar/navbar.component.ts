import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit  {
  dropdown_open = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.dropdown_open = !this.dropdown_open;
  }

  relatorio(): void {
    this.router.navigate(['/relatorio']);
  }
  // router: any;
  // relatorio(){
  //   this.router.navigate(['/relatorio'])
  // }
  // open = false;
  // dropdown_open = false;

  // ngOnInit(): void {
  // }

  // toggleDropdown(): void {
  //   this.dropdown_open = !this.dropdown_open;
  // }
}

