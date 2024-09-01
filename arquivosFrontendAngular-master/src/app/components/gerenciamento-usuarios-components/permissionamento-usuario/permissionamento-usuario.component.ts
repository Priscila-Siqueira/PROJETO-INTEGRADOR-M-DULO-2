import { EtapaService } from '../../../service/etapa.service';
import { Projeto } from '../../../interface/projeto';
import { ProjetoService } from '../../../service/projeto.service';
import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../../service/disciplina.service';

@Component({
  selector: 'app-permissionamento-usuario',
  standalone: true,
  imports: [],
  templateUrl: './permissionamento-usuario.component.html',
  styleUrl: './permissionamento-usuario.component.css'
})
export class PermissionamentoUsuarioComponent implements OnInit {
constructor (private projetoService: ProjetoService, private disciplinaService: DisciplinaService, private etapaService: EtapaService) {}

  projetos: Projeto[] = [];
  ngOnInit(): void {
    this.getProjetosDaEmpresaDoUsuarioId(4);
    this.getCheckedValue("D", "RW");
  }

  getProjetosDaEmpresaDoUsuarioId(usuarioId: number) : void{
    //Obter os projetos do usuario baseado na empresaId
    this.projetoService.getProjetosDaEmpresaDoUsuarioId(usuarioId).subscribe({
      next: (response)=> {
        response && (this.projetos = response);
        this.projetos.forEach(projeto => {
          //Obter as disciplinas de cada projeto
          this.disciplinaService.getDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(usuarioId, <number>projeto.projeto_id).subscribe({
            next: (response1)=> {
              projeto.disciplinas = response1;
              projeto.disciplinas.forEach(disciplina => {
                //Obter as etapas de cada disciplina
                this.etapaService.getEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(usuarioId, <number>disciplina.disciplina_id).subscribe({
                  next: (response2)=> {
                    disciplina.etapas = response2;
                  }
                })
              })
            }
          })
        });
        console.log(this.projetos)
      },
      error: (error)=> console.log(error),
    });

  }

  getCheckedValue(inputLetter: string, inputValue: string) : any {
    let result = inputValue.includes(inputLetter);
    if(result){
      return "checked";
    }else{
      return "";
    }
  }

}
