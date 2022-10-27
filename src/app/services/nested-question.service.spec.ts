import { TestBed } from '@angular/core/testing';

import { NestedQuestionService } from './nested-question.service';

describe('NestedQuestionService', () => {
  let service: NestedQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
