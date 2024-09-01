import { Component } from '@angular/core';

@Component({
  selector: 'app-arquivo-tag',
  standalone: true,
  imports: [],
  templateUrl: './arquivo-tag.component.html',
  styleUrl: './arquivo-tag.component.css'
})
export class ArquivoTagComponent {
  tags: string[] = [

      'subsolo',
      // color: 'gray-300'

     'projeto legal',
      // color: 'red-400'


   'liberado para obra',
      // color: 'green-400'

  ]

  setTagColor(nome: string): string {
    if (nome === 'subsolo') {
      return 'gray-300'
    }
    if (nome === 'projeto legal') {
      return 'red-400'
    }
    if (nome === 'liberado para obra') {
      return 'green-400'
    }
    return 'white'
  }


}

