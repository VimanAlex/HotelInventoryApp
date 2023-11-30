import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Resolve, ResolveFn } from '@angular/router';
import { Comments } from '../CommentInterface/Comments';
import { CommentsService } from '../CommentService/comments.service';
import { inject } from '@angular/core';

export const commentsGuard: ResolveFn<Comments[]> = (route: ActivatedRouteSnapshot) => {

  const commentservice = inject(CommentsService)
  //const router = inject(ActivatedRoute)

  return commentservice.getComments();
};

// Acest guard ne permite sa incarcam datele din response mai repede in pagina
// dupa creearea guardului , adaugam resolve in route config , apoi in componenta injectam ativatedRouter
// pentru a avea acces la datele care se incarca mai repede pentru a le putea face display in UI

// prefatching data , adica avem acces la date inainte sa fie randate in UI
