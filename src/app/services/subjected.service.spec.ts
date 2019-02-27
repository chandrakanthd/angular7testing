import { TestBed } from '@angular/core/testing';

import { SubjectedService } from './subjected.service';

describe('SubjectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectedService = TestBed.get(SubjectedService);
    expect(service).toBeTruthy();
  });
});
