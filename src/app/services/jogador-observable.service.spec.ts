import { TestBed } from '@angular/core/testing';

import { JogadorObservableService } from './jogador-observable.service';

describe('JogadorObservableService', () => {
  let service: JogadorObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogadorObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
