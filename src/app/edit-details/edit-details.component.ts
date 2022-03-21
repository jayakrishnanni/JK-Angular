import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from "../service/auth-service.service";

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  routerSub !: Subscription;
  countryId : any;
  covidCountrywiseStatus= [];
  currentCountry= {};
  cases: any;
  deaths!: number;
  recovered !: number;
  tests !: number;
  country = '';

  constructor(private route: ActivatedRoute,
              private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(params => {
      console.log('jkkk params'+JSON.stringify(params));
      this.countryId = params['id'];
    });
    this.getCountrywiseCovidStatus();
  };

  getCountrywiseCovidStatus (){
    this.authService.getCountriesCases().subscribe(response =>{
      console.log('jkkk response'+JSON.stringify(response));
      if(response){
        this.covidCountrywiseStatus = response;
        this.covidCountrywiseStatus.forEach((data:any) => {
          if(data.countryInfo._id == this.countryId){
            this.currentCountry = data;
            this.cases = data.cases;
            this.deaths = data.deaths;
            this.recovered = data.recovered;
            this.tests = data.tests;
            this.country = data.country;
            console.log('jkkk this.this.cases'+JSON.stringify(this.cases));
          }
          });
      }

    })
  }

}
