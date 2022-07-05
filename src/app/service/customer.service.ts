import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http : HttpClient) {}
  
  getCustomerdetails() : Observable<any> {
    var customervalues = '../../assets/api/customers.json'
    return this.http.get<any>(customervalues)
  }
}
