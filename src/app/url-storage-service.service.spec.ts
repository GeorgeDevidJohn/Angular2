import { TestBed } from '@angular/core/testing';

import { UrlStorageServiceService } from './url-storage-service.service';

describe('UrlStorageServiceService', () => {
  let service: UrlStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
