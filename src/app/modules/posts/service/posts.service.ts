import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/core/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.BaseUrl}posts`);
  }
  getPostbyId(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.BaseUrl}posts/${id}`);
  }
}
