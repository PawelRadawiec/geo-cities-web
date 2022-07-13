import { TestBed } from '@angular/core/testing';

import { AsideOverlayService } from './aside-overlay.service';

describe('AsideOverlayService', () => {
  let service: AsideOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsideOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
