import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { BuscaJogadorComponent } from './busca-jogador/busca-jogador.component';
import { NovoJogadorComponent } from './novo-jogador/novo-jogador.component';
import { ListaJogadorComponent } from './lista-jogador/lista-jogador.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    RodapeComponent,
    LandPageComponent,
    LoginComponent,
    BuscaJogadorComponent,
    NovoJogadorComponent,
    ListaJogadorComponent,
    JogadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
