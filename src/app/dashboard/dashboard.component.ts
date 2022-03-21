import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthServiceService} from "../service/auth-service.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  covidData !: Subscription;
  covideCountryData !: Subscription;
  covidDataStatus !: boolean;
  cases !: number;
  deaths !: number;
  recovered !: number;
  todayCases !: number;
  todayDeaths !: number;
  todayRecovered !: number;
  covidDataStatusMsg ='';

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.getCovidData();
  }

  getCovidData () {
    this.covidData = this.authService.getDashboard().subscribe(data=>{
      if(data){
        this.covidDataStatus = true;
        this.cases = data.cases;
        this.deaths = data.deaths;
        this.recovered = data.recovered;
        this.todayCases = data.todayCases;
        this.todayDeaths = data.todayDeaths;
        this.todayRecovered = data.todayRecovered;
      }
      else {
        this.covidDataStatus = false;
        this.covidDataStatusMsg = 'Something went wrong';
      }
    })
  }


}
