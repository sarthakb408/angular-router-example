import { TestBed } from '@angular/core/testing';

import { HttpFoodRequestService } from './http-food-request.service';

describe('HttpFoodRequestService', () => {
  let service: HttpFoodRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFoodRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
