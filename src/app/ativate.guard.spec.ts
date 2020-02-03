import { TestBed, async, inject } from '@angular/core/testing';

import { AtivateGuard } from './ativate.guard';

describe('AtivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtivateGuard]
    });
  });

  it('should ...', inject([AtivateGuard], (guard: AtivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
