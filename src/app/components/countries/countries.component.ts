import { Component, OnInit} from '@angular/core';
import { Subscription } from "rxjs";
import { AuthServiceService } from "../../service/auth-service.service";
import { IGame } from '../Interface/Interface'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {

   igame: IGame |  undefined;
  
  private chipmunkeCountryData !: Subscription;
  chipmunkCountryDataStatus !: boolean;
  chipmunkCountryDataStatusMsg = '';
  chipmunkCountrywiseStatus:any = [];
  data: Array<any>;
  totalRecords !: string;
  page : number = 1;  


  

  constructor( private authService : AuthServiceService) {
   this.data = new Array<any>();
  }

  
    
  
    
  // Using the merged interface
 
    
 
  ngOnInit() {
    this.igame = {
      gameId: 123,
      gameName: 'abc',
      gameCode: 'abc',
      releaseDate: 'abc',
      price: 123,
      description: 'abc',
      thumbRating: 123,
      imageUrl: 'abc',
  }
  console.log(this.igame.gameId)
    this.getCountrywisechipmunkStatus();
  }
  
  
  getCountrywisechipmunkStatus (){
    this.chipmunkeCountryData = this.authService.getCountriesCases().subscribe((response:any) =>{
      console.log('jkkk response'+JSON.stringify(response));
      if(response){
        this.chipmunkCountrywiseStatus = response;
        this.chipmunkCountryDataStatus = true;
        this.data = response;
        this.totalRecords = response.length;
      }
      else {
        this.chipmunkCountryDataStatus = false;
        this.chipmunkCountryDataStatusMsg = 'Something went wrong';
      }
    })
  }
  

}
