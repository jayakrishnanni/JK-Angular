import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  display: boolean | any;

  constructor(private router: Router,
    private authservice: AuthServiceService) { }

  ngOnInit(): void {
  }

 
  displaynone(){
    if(this.router.url === '/login') {
      this.display = false;
    }else {
      this.display = true;
    }
  }


  login() {
    this.authservice.login();
    }

    logout() {
      this.authservice.logout();
  }
}
