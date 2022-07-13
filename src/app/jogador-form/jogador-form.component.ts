import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Jogador } from '../model/jogador';
import { JogadorFormService } from './service/jogador-form.service';

@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css']
})
export class JogadorFormComponent implements OnInit {

  @ViewChild('form') form!: NgForm;
  public data: Jogador;
  public jogadorId;
  isSubmitted!: boolean;

  constructor(private _route: ActivatedRoute, private jogadorService: JogadorFormService) {
    this.data = new Jogador('','','','')
   }


  ngOnInit(): void {

    this._route.queryParams.subscribe(params => {
      this.jogadorId = this._route.snapshot.paramMap.get('id')
    });
  }

  onSubmit(){
    this.isSubmitted = true;
    // if (!this.jogadorService.isExist(this.data.nome)){
      this.jogadorService.save(this.data);
    // } else {
      // this.jogadorService.update(this.data);
    // }
    alert('Jogador cadastrado com sucesso!');

    this.form.reset();
    this.data = new Jogador('', '', '', '');
  }

}
