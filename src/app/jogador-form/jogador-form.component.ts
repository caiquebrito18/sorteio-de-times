import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogador } from '../model/jogador';
import { jogadores } from '../util/jogadores';

@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css']
})
export class JogadorFormComponent implements OnInit {

  public jogadorId;
  constructor(private _route: ActivatedRoute) {
   }


  ngOnInit(): void {

    this._route.queryParams.subscribe(params => {
      this.jogadorId = this._route.snapshot.paramMap.get('id')
    });
  }

}
