import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsersService } from 'app/service/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  userdata : any;
  postdata: any;
  constructor( private users : UsersService) { }

  ngOnInit(): void {

  }
   


  getUserdetails() : void {
    this.users.getUsers().subscribe((data: any) => {
      this.userdata = data;
      console.log('this.userdata >>>' + JSON.stringify(this.userdata));
    })
  }

  getPostdetails() : void {
    this.users.getPosts().subscribe((data: any) =>{
      this.postdata = data;
      console.log('this.postdata >>>' + JSON.stringify(this.postdata));
    })
  }

}
