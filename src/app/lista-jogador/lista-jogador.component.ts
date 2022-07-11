import { Component, OnInit } from '@angular/core';
import { Jogador } from '../model/jogador';
import { jogadores } from '../util/jogadores';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-lista-jogador',
  templateUrl: './lista-jogador.component.html',
  styleUrls: ['./lista-jogador.component.css']
})


export class ListaJogadorComponent implements OnInit {

  jogadores = jogadores;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onBuscarJogador(valor: string){
    if(this.isEmpty(valor)){
      this.jogadores = jogadores;
    } else {
      this.jogadores = this.jogadores.filter((a) => a.nome == valor);
    }
  }

  isEmpty(val: string){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

  onSelect(jogador: Jogador) {
    this._router.navigate(['jogador/edit', jogador.id])
  }

}
