import { TestBed } from '@angular/core/testing';
import { CanActivateFn, ResolveFn } from '@angular/router';

import { commentsGuard } from './comments.guard';
import { Comments } from '../CommentInterface/Comments';

describe('commentsGuard', () => {
  const executeGuard: ResolveFn<Comments[]> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => commentsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
