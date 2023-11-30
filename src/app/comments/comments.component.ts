import { Component, OnInit } from '@angular/core';
import { CommentsService } from './CommentService/comments.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'hinv-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsSerice:CommentsService,private router:ActivatedRoute){}

  comments$ = this.commentsSerice.getComments();
  commentsStream$ = this.router.data.pipe(map(data => data['comments'])) // resolve guard prefetching data from router to avoid delay load data
  displayedColumns: string[] = [ 'id','postId', 'name', 'email','body']; // table angular material : define columns head

  ngOnInit(): void {}

}
