import { Notificacao } from './../../interface/notificacao';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { BarraPesquisaComponent } from '../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component';


@Component({
  selector: 'app-gerenciamento-notification',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MenuLateralComponent, BarraPesquisaComponent],
  templateUrl: './gerenciamento-notification.component.html',
  styleUrl: './gerenciamento-notification.component.css'
})
export class GerenciamentoNotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService){}

  notificacoes: Notificacao[] = [];

   ngOnInit(): void {
     this.notificationService.getNotificationUserId(7).subscribe((notifica) => {
       this.notificacoes = notifica;
     });
   }


   deletarNotificacao(NotificacaoId: number): void {
    this.notificationService.remove(NotificacaoId).subscribe(() => {
      this.notificacoes = this.notificacoes.filter(n => n.notificacao_id !== NotificacaoId);
    });
  }

  notificationNotRead(NotificacaoId: number): void{
    this.notificationService.getNotificationUserId(5).subscribe((notifica)=>{
      this.notificacoes = notifica;
    })
  }

  notificationRead(NotificacaoId: number): void{
    this.notificationService.getNotificationUserId(3).subscribe((notifica)=>{
      this.notificacoes = notifica;
    })
  }

  notificationAll(): void{
    this.notificationService.findAll().subscribe((notifica)=>{
      this.notificacoes = notifica;
    })
  }

}
