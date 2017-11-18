import { TestBed, inject } from '@angular/core/testing';

import { RecieveJsonService } from './recieve-json.service';

describe('RecieveJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecieveJsonService]
    });
  });

  it('should be created', inject([RecieveJsonService], (service: RecieveJsonService) => {
    expect(service).toBeTruthy();
  }));
});
