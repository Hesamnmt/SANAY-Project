import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGithubUser(user: string) {
    return this.http.get(`https://api.github.com/users/${user}`);
  }
}
