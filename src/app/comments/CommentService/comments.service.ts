import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../CommentInterface/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  //response$ = this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments')

  getComments(){
     
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
