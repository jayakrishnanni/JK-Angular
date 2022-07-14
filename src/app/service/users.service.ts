import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private  http : HttpClient) { }


  fetchinguserta() : any {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUsers() : any {
    return this.http.get<any>('https://gorest.co.in/public/v2/users');
  }

  getPosts(): any{
     return this.http.get<any>('https://gorest.co.in/public/v2/posts')
  }
}
