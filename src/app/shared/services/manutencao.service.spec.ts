import { TestBed, inject } from '@angular/core/testing';

import { ManutencaoService } from './manutencao.service';

describe('ManutencaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManutencaoService]
    });
  });

  it('should be created', inject([ManutencaoService], (service: ManutencaoService) => {
    expect(service).toBeTruthy();
  }));
});
