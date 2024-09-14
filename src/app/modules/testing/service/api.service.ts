import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGithubUser(user: string) {
    return this.http.get(`https://api.github.com/users/${user}`);
  }

  getData1(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  getData2(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/2');
  }

  getCombinedData(): Observable<any> {
    return concat(this.getData1(), this.getData2());
  }
  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
