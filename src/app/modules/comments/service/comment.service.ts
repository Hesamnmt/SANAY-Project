import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from 'src/app/core/models/comments';
import { Observable } from 'rxjs';
import { environment } from 'environment/environment';
import { IPost } from 'src/app/core/models/post';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${environment.BaseUrl}comments`);
  }

  getPostbyId(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${environment.BaseUrl}posts/${id}`);
  }
}
