import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca-jogador',
  templateUrl: './busca-jogador.component.html',
  styleUrls: ['./busca-jogador.component.css']
})
export class BuscaJogadorComponent implements OnInit {

  @Output() buscarJogador: EventEmitter<string> = new EventEmitter()
  valor?: string

  constructor() { }

  ngOnInit(): void {
  }
  
  buscar() {
    this.buscarJogador.emit(this.valor);
    this.valor = '';
  }
}
