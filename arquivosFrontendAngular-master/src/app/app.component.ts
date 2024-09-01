import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

import {  PLATFORM_ID, Inject } from '@angular/core';

import { isPlatformBrowser } from "@angular/common";
import { BuscaComponent } from './components/busca/busca.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscaComponent, RouterModule, BreadcrumbComponent, BreadcrumbItemDirective],
  template: `<div></div>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'GDA';
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

   ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
