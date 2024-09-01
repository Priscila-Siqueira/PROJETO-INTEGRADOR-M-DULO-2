import { Component, Input, OnInit } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { ArquivoService } from '../../../service/arquivo.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit{

  @Input() listaArquivos: Arquivo[] = []

  constructor(private arquivoService: ArquivoService){}

  ngOnInit(): void {


  }
}
