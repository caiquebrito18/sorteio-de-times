import { Component, OnInit } from '@angular/core';
import { Jogador } from '../model/jogador';
import { jogadores } from '../util/jogadores';
import { Router } from '@angular/router'; 
// import { JogadorPromiseService } from '../services/jogador-promise.service';
import { JogadorObservableService } from '../services/jogador-observable.service';


@Component({
  selector: 'app-lista-jogador',
  templateUrl: './lista-jogador.component.html',
  styleUrls: ['./lista-jogador.component.css']
})


export class ListaJogadorComponent implements OnInit {

  jogadores?: Jogador[];

  constructor(private _router: Router, 
    private jogadorObservableService: JogadorObservableService) { }

  ngOnInit(): void {
    this.jogadorObservableService.getAll()
        .subscribe(
          (data) => {
            this.jogadores = data;
          },
          (error) => {
            alert('Erro ao carregar a listagem!');
          }
        );
  }

  onBuscarJogador(valor: string){
    if(this.isEmpty(valor)){
      console.log('entrou no if, valor: '+ valor);
      this.jogadores = jogadores;
    } else {
      if (this.jogadores !== undefined) {
        console.log('entrou no else, valor: ' + valor);
        this.jogadores = this.jogadores.filter((a) => a.nome == valor);
      }
    }
  }

  isEmpty(val: string){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

  onSelect(jogador: Jogador) {
    this._router.navigate(['jogador/edit', jogador.id])
  }

}
