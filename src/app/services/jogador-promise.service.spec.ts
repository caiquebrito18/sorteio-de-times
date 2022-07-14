import { TestBed } from '@angular/core/testing';

import { JogadorPromiseService } from './jogador-promise.service';

describe('JogadorPromiseService', () => {
  let service: JogadorPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogadorPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
