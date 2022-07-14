import { TestBed } from '@angular/core/testing';

import { JogadorFormService } from './jogador-form.service';

describe('JogadorFormService', () => {
  let service: JogadorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogadorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
