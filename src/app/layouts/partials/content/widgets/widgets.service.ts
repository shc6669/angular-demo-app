import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {
  private headers = {
    headers: new HttpHeaders({
      'Accept': 'application/json'})
  };
  restAPI = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  // Public method
  getPublicGits() {
    const publicGitsUrl = 'gists/public';
    return this.http.get(this.restAPI + publicGitsUrl, this.headers);
  }

  getUserRepos(username: any) {
    return this.http.get(this.restAPI + 'users/' + username + '/repos', this.headers);
  }
}
