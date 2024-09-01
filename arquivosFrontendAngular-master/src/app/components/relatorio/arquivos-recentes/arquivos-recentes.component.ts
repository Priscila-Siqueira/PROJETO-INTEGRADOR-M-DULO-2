import { Component } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { ArquivoService } from '../../../service/arquivo.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-arquivos-recentes',
  standalone: true,
  imports: [],
  templateUrl: './arquivos-recentes.component.html',
  styleUrl: './arquivos-recentes.component.css'
})
export class ArquivosRecentesComponent {


  listaArquivosRecentes: Arquivo[] = []

  // constructor(private arquivoService: ArquivoService){}

  // ngOnInit(): void {
  //   this.arquivoService.findAll().pipe(first()).subscribe(data => {
  //     this.listaArquivosRecentes = data
  //     console.log(data)
  //   })


  //   this.listaArquivosRecentes.reverse()
  //   this.listaArquivosRecentes.length = 6

  //   console.log(this.listaArquivosRecentes)
  // }

}
