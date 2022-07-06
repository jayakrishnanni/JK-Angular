import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthServiceService} from "../../service/auth-service.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chipmunkData !: Subscription;
  chipmunkeCountryData !: Subscription;
  chipmunkDataStatus !: boolean;
  cases !: number;
  deaths !: number;
  recovered !: number;
  todayCases !: number;
  todayDeaths !: number;
  todayRecovered !: number;
  chipmunkDataStatusMsg ='';

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.getchipmunkData();
  }

  getchipmunkData () {
    this.chipmunkData = this.authService.getDashboard().subscribe((data:any)=>{
      if(data){
        this.chipmunkDataStatus = true;
        this.cases = data.cases;
        this.deaths = data.deaths;
        this.recovered = data.recovered;
        this.todayCases = data.todayCases;
        this.todayDeaths = data.todayDeaths;
        this.todayRecovered = data.todayRecovered;
      }
      else {
        this.chipmunkDataStatus = false;
        this.chipmunkDataStatusMsg = 'Something went wrong';
      }
    })
  }


}
