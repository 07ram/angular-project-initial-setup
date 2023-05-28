import { TestBed } from '@angular/core/testing';

import { PorifolioGuard } from './porifolio.guard';

describe('PorifolioGuard', () => {
  let guard: PorifolioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PorifolioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
