import { TestBed } from '@angular/core/testing';

import { CartcountService } from './cartcount.service';

describe('CartcountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartcountService = TestBed.get(CartcountService);
    expect(service).toBeTruthy();
  });
});
