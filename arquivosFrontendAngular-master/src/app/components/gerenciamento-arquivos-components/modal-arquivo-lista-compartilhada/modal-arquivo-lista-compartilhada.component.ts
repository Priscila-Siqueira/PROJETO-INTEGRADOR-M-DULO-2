import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { ListaCompartilhadaService } from '../../../service/listaCompartilhada.service';
import { UsuarioService } from '../../../service/usuario.service';
import { Usuario } from '../../../interface/usuario';

@Component({
  selector: 'app-modal-arquivo-lista-compartilhada',
  standalone: true,
  imports: [],
  templateUrl: './modal-arquivo-lista-compartilhada.component.html',
  styleUrl: './modal-arquivo-lista-compartilhada.component.css'
})
export class ModalArquivoListaCompartilhadaComponent implements OnInit, OnDestroy {

  @Input() dados: Arquivo[] = [];

  arquivosIds : string[] = [];

  // Busca de listas compartilhadas
  listas: any[] = [];
  filteredListas: any[] = [];
  selectedListas: any[] = [];
  private searchSubject = new Subject<string>();
  private unsubscribe$ = new Subject<void>();
  searchQuery: string = '';

  // Busca de usuarios
  listasUsuarios: Usuario[] = [];
  filteredListasUsuarios: any[] = [];
  selectedListaUsuarios: any[] = [];
  private searchSubjectUsuario = new Subject<string>();
  private unsubscribeUsuario$ = new Subject<void>();
  searchQueryUsuario: string = '';

  constructor(private listaCompartilhadaService: ListaCompartilhadaService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(100),
      takeUntil(this.unsubscribe$)
      ).subscribe(query => {
      if (query && query.length > 1) {
          this.listaCompartilhadaService.getListaCompartilhada().subscribe(data => {
              this.listas = data;
              this.filteredListas = this.listas.filter(lista =>
                  lista.lista_compartilhada_descricao.toLowerCase().includes(query.toLowerCase())
              );
          });
      } else {
          this.filteredListas = [];
      }
  });

  this.searchSubjectUsuario.pipe(
    debounceTime(100),
    takeUntil(this.unsubscribeUsuario$)
    ).subscribe(query => {
    if (query && query.length > 1) {
        this.usuarioService.findAll().subscribe(data => {
            this.listasUsuarios = data;
            this.filteredListasUsuarios = this.listasUsuarios.filter(lista =>
                lista.usuario_nome.toLowerCase().includes(query.toLowerCase())
            );
        });
    } else {
        this.filteredListasUsuarios = [];
    }
  });
}

search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchSubject.next(target.value);
}

searchUsuario(event: Event) {
  const target = event.target as HTMLInputElement;
  this.searchSubjectUsuario.next(target.value);
}

ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();

  this.unsubscribeUsuario$.next();
  this.unsubscribeUsuario$.complete();
}

onSelectLista(lista: any) {
  if (!this.selectedListas.some(item => item.lista_compartilhada_id === lista.lista_compartilhada_id)) {
    this.selectedListas.push(lista);
  }
}

onSelectListausuario(usuario: any) {
  if (!this.selectedListaUsuarios.some(item => item.usuario_id === usuario.usuario_id)) {
    this.selectedListaUsuarios.push(usuario);
  }
}

limpar(){
  this.selectedListas = [];
  this.selectedListaUsuarios = [];
}

retirarArquivo(dado: Arquivo){
  const indice = this.dados.findIndex(a => a.arquivo_id === dado.arquivo_id);
    if (indice !== -1) {
      this.dados.splice(indice, 1);
    }
}

retirarUsuario(item: Usuario){
  const indice = this.selectedListaUsuarios.findIndex(a => a.usuario_id === item.usuario_id);
    if (indice !== -1) {
      this.selectedListaUsuarios.splice(indice, 1);
    }
}

retirarLista(item: any){
  const indice = this.selectedListas.findIndex(a => a.lista_compartilhada_id === item.lista_compartilhada_id);
    if (indice !== -1) {
      this.selectedListas.splice(indice, 1);
    }
}

onSubmit(){
  if (this.selectedListas.length == 0 || this.selectedListaUsuarios.length == 0 ||
    this.dados?.length == 0){
      console.log("Precisa selecionar pelo menos um arquivo, um usuário e uma lista compartilhada para realizar a gravação");
      return;
    } else {
      this.arquivosIds = this.dados.map(arquivo => arquivo.arquivo_id);
      for (var usuario of this.selectedListaUsuarios) {
        for (var lista of this.selectedListas){
          console.log(`usuario: ${usuario.usuario_id}`);
          console.log(`lista compartilhada: ${lista.lista_compartilhada_id}`);
          this.listaCompartilhadaService.addArquivoToListaCompartilhada(usuario.usuario_id, lista.lista_compartilhada_id, this.arquivosIds).subscribe({
            next: value => console.log('Observable emitted the next value: ' + value),
            error: err => console.error('Observable emitted an error: ' + err),
            complete: () => console.log('Observable emitted the complete notification')});
        }
      }
      console.log("Precisa selecionar pelo menos um arquivo, um usuário e uma lista compartilhada para realizar a gravação");
    }
}

}
