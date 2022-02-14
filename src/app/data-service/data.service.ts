import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  username!: string;
  repoName!: string;
  clientId: string = "bbdc089eb40745f80157";
  clientSecret: string = "c5f3a6846c248d5c1714343f5748a5fb8ad65240b";
  apikey:string='be05ad82ef1dec303061648a172836e81613bc78';
  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }
  
}
