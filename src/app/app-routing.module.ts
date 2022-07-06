import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from 'src/app/land-page/land-page.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ListaJogadorComponent } from 'src/app/lista-jogador/lista-jogador.component';
import { JogadorFormComponent } from 'src/app/jogador-form/jogador-form.component';

const routes: Routes = [
  // {path: '', component: LandPageComponent},
  {path: '', component: LoginComponent},
  { path: 'jogador', component: ListaJogadorComponent },
  { path: 'jogador/new', component: JogadorFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
