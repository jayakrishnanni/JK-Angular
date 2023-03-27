import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }
  customerData: any;
  totalRecords : number | undefined;
  page :any = 1;
  customerDataDetails: boolean = false;
  ngOnInit(): void {

  }

  customersdetails() {
    this.customerDataDetails = false;
    // this.customersData.getCustomerdetails().subscribe((data: any) => {
    //   console.log('chipmunk abc')
    //   this.customerDataDetails = true;
    //   this.customerData = data;
    //   this.totalRecords = this.customerData.length;
    //   console.log('chipmunk customers' +JSON.stringify(this.customerData));
    // })
  }

}
