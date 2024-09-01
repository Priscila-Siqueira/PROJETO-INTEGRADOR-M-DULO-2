import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-arquivo-menu-dropdown',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatDivider],
  templateUrl: './arquivo-menu-dropdown.component.html',
  styleUrl: './arquivo-menu-dropdown.component.css'
})
export class ArquivoMenuDropdownComponent {

}
