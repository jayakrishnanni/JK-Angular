import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  display: boolean | any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  displaynone(){
    if(this.router.url === '/login') {
      this.display = false;
    }else {
      this.display = true;
    }
  }
}
