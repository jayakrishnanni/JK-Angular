import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { AuthServiceService } from "../service/auth-service.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  private covideCountryData !: Subscription;
  covidCountryDataStatus !: boolean;
  covidCountryDataStatusMsg = '';
  covidCountrywiseStatus:any = [];
  data: Array<any>;
  totalRecords !: string;
  page : number = 1;

  constructor( private authService : AuthServiceService) {
   this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.getCountrywiseCovidStatus();
  }

  getCountrywiseCovidStatus (){
    this.covideCountryData = this.authService.getCountriesCases().subscribe(response =>{
      console.log('jkkk response'+JSON.stringify(response));
      if(response){
        this.covidCountrywiseStatus = response;
        this.covidCountryDataStatus = true;
        this.data = response;
        this.totalRecords = response.length;
      }
      else {
        this.covidCountryDataStatus = false;
        this.covidCountryDataStatusMsg = 'Something went wrong';
      }
    })
  }

}
