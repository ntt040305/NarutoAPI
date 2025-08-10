import { TestBed } from '@angular/core/testing';

import { Naruto2Service } from './naruto2.service';

describe('Naruto2Service', () => {
  let service: Naruto2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Naruto2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
