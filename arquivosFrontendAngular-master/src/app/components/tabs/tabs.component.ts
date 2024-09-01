import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [ComentarioComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
