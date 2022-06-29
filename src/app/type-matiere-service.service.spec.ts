import { TestBed } from '@angular/core/testing';

import { TypeMatiereServiceService } from './type-matiere-service.service';

describe('TypeMatiereServiceService', () => {
  let service: TypeMatiereServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMatiereServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
