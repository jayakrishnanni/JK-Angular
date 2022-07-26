import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userObject = new BehaviorSubject<any>(null);
  public readonly $userObject: Observable<any> =this.userObject.asObservable();

  constructor( private  http : HttpClient) { }
  setUserObject(user: any) {
    console.log('jkkkkk set' +JSON.stringify(user))
    this.userObject.next(user);
  }

  getUserObject() {
    console.log('this.userObject' +JSON.stringify(this.userObject))
    return this.userObject.getValue();
  }

  fetchinguserta() : any {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUsers() : any {
    return this.http.get<any>('https://gorest.co.in/public/v2/users');
  }

  getPosts(): any{
     return this.http.get<any>('https://gorest.co.in/public/v2/posts')
  }



  url: string ="http://localhost:3000/Users";

  getUserDetails(): any {
    return this.http.get<Users[]>(this.url)
  }

  getCustomerdetails() : Observable<any> {
    var customervalues = '../../assets/api/customers.json'
    return this.http.get<any>(customervalues)
  }
}
