import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaJogadorComponent } from './busca-jogador.component';

describe('BuscaJogadorComponent', () => {
  let component: BuscaJogadorComponent;
  let fixture: ComponentFixture<BuscaJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaJogadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
