import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdata: {} | any;

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.fetchinguserta().subscribe((data:any)=>{
      console.log('chipmunk users' +JSON.stringify(data));
       this.userdata = data;
    })
  }

  

}
