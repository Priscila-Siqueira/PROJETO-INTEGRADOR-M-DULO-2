import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from './../../components/relatorio/dropdown/dropdown.component';
import { CardsComponent } from '../../components/relatorio/cards/cards.component';
import { BreadcrumbComponent } from '../../components/relatorio/breadcrumb/breadcrumb.component';
import { IndicadorComponent } from '../../components/relatorio/indicador/indicador.component';
import { BadgeAtivoComponent } from '../../components/relatorio/badge-ativo/badge-ativo.component';
import { CalendarComponent } from '../../components/relatorio/calendar/calendar.component';
import { UserInfoComponent } from '../../components/relatorio/user-info/user-info.component';
import { ArquivosRecentesComponent } from '../../components/relatorio/arquivos-recentes/arquivos-recentes.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { first } from 'rxjs';
import { Arquivo } from '../../interface/arquivo';
import { ArquivoService } from '../../service/arquivo.service';
import { GraficoComponent } from "../../components/relatorio/grafico/grafico.component";
import { SearchComponent } from "../../components/relatorio/search/search.component";
import { Usuario } from '../../interface/usuario';
import { Empresa } from '../../interface/empresa';
import { Projeto } from '../../interface/projeto';
import { UsuarioService } from '../../service/usuario.service';
import { EmpresaService } from '../../service/empresa.service';
import { ProjetoService } from '../../service/projeto.service';
import { BuscaComponent } from "../../components/busca/busca.component";

@Component({
    selector: 'app-relatorio',
    standalone: true,
    templateUrl: './relatorio-dashboard.component.html',
    styleUrl: './relatorio-dashboard.component.css',
    imports: [
        CardsComponent,
        BreadcrumbComponent,
        IndicadorComponent,
        DropdownComponent,
        BadgeAtivoComponent,
        CalendarComponent,
        UserInfoComponent,
        ArquivosRecentesComponent,
        NavbarComponent,
        MenuLateralComponent,
        GraficoComponent,
        SearchComponent,
        BuscaComponent
    ]
})
export class RelatorioComponent implements OnInit{

  listaArquivos: Arquivo[] = []
  listaArquivosAprovados: Arquivo[] = []
  listaArquivosReprovados: Arquivo[] = []
  listaArquivosPendentes: Arquivo[] = []
  listaUsuarios: Usuario[] = []
  listaUsuariosAtivos: Usuario[] = []
  listaEmpresas: Empresa[] = []
  listaProjetos: Projeto[] = []


  constructor(
    private arquivoService: ArquivoService,
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService,
    private projetoService: ProjetoService
  ){}

  ngOnInit(): void {
    // Lista de Arquivos
    this.arquivoService.findAll().pipe(first()).subscribe(data => {
      this.listaArquivos = data
      console.log(data)

    this.listaArquivos.forEach(arquivo => {
      switch(arquivo.arquivo_status){
        case 1:
          this.listaArquivosAprovados.push(arquivo)
          break;
        case -1:
          this.listaArquivosReprovados.push(arquivo)
          break;
        case 0:
          this.listaArquivosPendentes.push(arquivo)
          break;
      }
    });

  // Lista de Usuários
  this.usuarioService.findAll().subscribe(data => {
    this.listaUsuarios = data;

    this.listaUsuariosAtivos = this.listaUsuarios.filter(usuario => usuario.usuario_status === 1);
  });

    this.listaUsuarios.forEach(usuario => {
      switch(usuario.usuario_status){
        case 1:
          this.listaUsuariosAtivos.push(usuario)
          break;
      }
    });

    // Lista de Empresas
    this.empresaService.getEmpresa().subscribe(data => {
      this.listaEmpresas = data;
    });

    // Lista de Projetos:
    this.projetoService.getProjetos().subscribe(data => {
      this.listaProjetos = data;
    });


  });

 }

}
