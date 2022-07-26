import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor( private http : HttpClient) { }


  exampleUsers():any {
    return this.http.get<any>('https://gorest.co.in/public/v2/users');
  }

  examplePosts():any {
   return this.http.get<any>('https://gorest.co.in/public/v2/posts');
  }
}
