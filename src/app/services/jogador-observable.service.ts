import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Jogador } from '../model/jogador';
import { RoutesAPI } from '../util/routes-api';


@Injectable({
  providedIn: 'root'
})
export class JogadorObservableService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  getAll(): Observable<Jogador[]>{
    const query: HttpParams = new HttpParams();
    return this.httpClient
      .get<Jogador[]>(`${RoutesAPI.JOGADORES}?_sort=nome&_order=DESC&`);
  }
}
