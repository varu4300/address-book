import { TestBed } from '@angular/core/testing';
import { Page } from 'src/app/enum';

import { SharedService } from './shared.service';

describe('DeviceDetectionService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 from Observable',
  (done) => {
    service.setPage(Page.HOME)
    service.getPage().subscribe(value => {
      expect(value).toBe(0)
      done();
    })
  })

  it('should return 1 from Observable',
  (done) => {
    service.setPage(Page.DETAILS)
    service.getPage().subscribe(value => {
      expect(value).toBe(1)
      done();
    })
  })
});
