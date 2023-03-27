import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'app/service/users.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  inputValue: any;
  userdata: any;
  constructor(private route  : ActivatedRoute,
    private router : Router,
    private users : UsersService) { }

  ngOnInit(): void {
  }

  userdetails(inputValue: any) {
    this.users.getUsers().subscribe((data: any) => {
      this.userdata = data;
      console.log('this.userdata >>>' + JSON.stringify(this.userdata));
      this.users.setUserObject(this.userdata);
    })
    this.router.navigate(['search/',inputValue])
  }

}
