import { GerenciamentoUsuarioComponent } from './pages/gerenciamento-usuario/gerenciamento-usuario.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homeArquivos/homeArquivos.component';

import { LoginemailComponent } from './components/loginemail/loginemail.component';
import { emailGuard } from './guard/email.guard';
import { LogintokenComponent } from './components/logintoken/logintoken.component';
import { tokenGuard } from './guard/token.guard';
import { InicialComponent } from './components/inicial/inicial.component';
import { inicialGuard } from './guard/inicial.guard';
import { LoginjwtComponent } from './components/loginjwt/loginjwt.component';
import { GerenciamentoArquivosComponent } from './pages/gerenciamento-arquivos/gerenciamento-arquivos.component';
import { RelatorioComponent } from './pages/relatorio/relatorio-dashboard.component';
import { ListaCompartilhadaComponent } from './pages/lista-compartilhada/lista-compartilhada.component';
import { GerenciamentoDisciplinasComponent } from './pages/gerenciamento-disciplinas/gerenciamento-disciplinas.component';
import { GerenciamentoEtapasComponent } from './pages/gerenciamento-etapas/gerenciamento-etapas.component';
import { GerenciamentoNotificationComponent } from './pages/gerenciamento-notification/gerenciamento-notification.component';
import { RelatorioArquivoComponent } from './pages/relatorio-arquivo/relatorio-arquivo.component';

export const routes: Routes = [
  {
    path: 'page',
    loadComponent: () => import('./components/comentario/comentario.component')
  },
  {

    path: 'dashboard',
    component: HomeComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Home' }
  },
  { path: 'listaCompartilhada', component: ListaCompartilhadaComponent, data: { breadcrumb: 'Lista Compartilhada' }},
  { path: 'loginemail', component: LoginemailComponent, canActivate: [emailGuard]},
  { path: 'logintoken', component: LogintokenComponent, canActivate: [tokenGuard] },
  { path: 'inicial', component: InicialComponent, canActivate: [inicialGuard] },
  {
    path: 'etapas/:id',
    component: GerenciamentoEtapasComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Etapas' }
  },
  { path: 'loginjwt/:jwt', component: LoginjwtComponent},
  {
    path: 'disciplinas/:id',
    component: GerenciamentoDisciplinasComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Disciplinas' }
  },
  {
    path: 'usuarios',
    component: GerenciamentoUsuarioComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Usuarios' }
  },
  {
    path: 'arquivos/:id',
    component: GerenciamentoArquivosComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Arquivos' }
  }
, { path: 'relatorio',
    component: RelatorioComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Relatorio' }

    },
    {
      path: 'relatorio-arquivo',
      component: RelatorioArquivoComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Relatorio de arquivo' }
    },
  {
    path: 'notificacao', component: GerenciamentoNotificationComponent, canActivate: [inicialGuard], data: { breadcrumb: 'Notificacao' }

  },
  { path: '', redirectTo: '/loginemail', pathMatch: 'full' },
  { path: '**', redirectTo: '/loginemail' }
];
