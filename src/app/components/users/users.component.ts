import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdata : any;
  postdata: any;
  constructor( private users : UsersService) { }

  ngOnInit(): void {

  }
   


  getUserdetails() : void {
    this.users.getUsers().subscribe((data: any) => {
      this.userdata = data;
      console.log(this.userdata);
    })
  }

  getPostdetails() : void {
    this.users.getPosts().subscribe((data: any) =>{
      this.postdata = data;
    })
  }
}
