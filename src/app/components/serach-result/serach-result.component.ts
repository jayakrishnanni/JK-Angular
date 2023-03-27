import { Component, OnInit, AfterViewInit,OnChanges, SimpleChanges,AfterViewChecked, ComponentFactoryResolver  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-serach-result',
  templateUrl: './serach-result.component.html',
  styleUrls: ['./serach-result.component.css']
})
export class SerachResultComponent implements OnInit,AfterViewInit, OnChanges, AfterViewChecked  {
  userValue: any;
  searchValue: any;
  userdata: any;
  constructor(private route : ActivatedRoute,
              private UsersService : UsersService) { }

  ngOnInit(): void {
     this.searchValue = this.route.snapshot.params['result'];
     console.log('ddddd' + JSON.stringify(this.searchValue))
     this.userdata = this.UsersService.getUserObject();
     console.log('ddddd333' + JSON.stringify(this.userdata))
    
     
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userdata = this.UsersService.getUserObject();
    console.log('jkkk this.userdata ffff ffff >>>' +JSON.stringify(this.userdata));
  }

  ngAfterViewInit(): void {
    this.userdata = this.UsersService.getUserObject();
    console.log('jkkk this.userdata ffff  >>>' +JSON.stringify(this.userdata));
  }

  
  ngAfterViewChecked(): void {
    this.userdata = this.UsersService.getUserObject();
    console.log('jkkk this.userdata ffvvbxgff  >>>' +JSON.stringify(this.userdata));
    this.searchValue = this.route.snapshot.params['result'];
     console.log('ddddd' + JSON.stringify(this.searchValue))
     this.userdata.filter((item: any) => {
      console.log('gdgdgdgdg')
         if(this.userdata == item.id) {
          console.log('jkkdhdhdhdh' + JSON.stringify(item.email+''+ item.name +''+item.gender))
         }
     })
  }



}
