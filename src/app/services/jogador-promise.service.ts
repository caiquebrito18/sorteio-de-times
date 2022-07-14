import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jogador } from '../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorPromiseService {

  URL = 'http://localhost:3000/jogadores';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getJogadores(): Promise<Jogador[] | undefined> {
    return this.httpClient.get<Jogador[]>(`${this.URL}`).toPromise();
  }

  save(jogador: Jogador): Promise<any> {
    return this.httpClient
      .post<Jogador>(
        this.URL,
        JSON.stringify(jogador),
        this.httpOptions
      )
      .toPromise();
  }

  update(jogador: Jogador): Promise<any> {
    return this.httpClient
      .put<Jogador>(
        `${this.URL}/${jogador.id}`,
        JSON.stringify(jogador),
        this.httpOptions
      )
      .toPromise();
  }

}
