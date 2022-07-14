import { Injectable } from '@angular/core';
import { Jogador } from 'src/app/model/jogador';
import { WebStorageUtil } from 'src/app/util/web-storage-utils';

@Injectable({
  providedIn: 'root'
})
export class JogadorFormService {
  jogadores!: Jogador[];
  className: string = 'jogadores';

  constructor() {
    this.jogadores = WebStorageUtil.getArray(this.className);
   }

  save(jogador: Jogador) {
    this.jogadores = WebStorageUtil.get(this.className);
    console.log(jogador)
    this.jogadores.push(jogador);
    WebStorageUtil.set(this.className, this.jogadores);
    console.log(this.jogadores)
  }

  update(jogador: Jogador) {
    this.jogadores = WebStorageUtil.get(this.className);
    this.delete(jogador.nome);
    this.save(jogador);
  }

  delete(nomeJogador: string): boolean {
    this.jogadores = WebStorageUtil.get(this.className);
    this.jogadores = this.jogadores.filter((j) => {
      return j.nome?.valueOf() != nomeJogador?.valueOf();
    });
    WebStorageUtil.set(this.className, this.jogadores);
    return true;
  }

  isExist(value: string): boolean {
    this.jogadores = WebStorageUtil.get(this.className);
    for (let j of this.jogadores) {
      if (j.nome?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getJogadores(): Jogador[] {
    this.jogadores = WebStorageUtil.get(this.className);
    return this.jogadores;
  }
}
