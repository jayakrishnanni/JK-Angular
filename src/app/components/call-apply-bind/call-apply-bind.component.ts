import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-apply-bind',
  templateUrl: './call-apply-bind.component.html',
  styleUrls: ['./call-apply-bind.component.css']
})
export class CallApplyBindComponent implements OnInit {
  bindcode: any;
  bindcode2: any;
  new: any;
  new2: any;
  value = {
    registrationNumber : "sachin",
    brand: "tendulakar"
  }
  value2 = {
    registrationNumber : "bhadra",
    brand: "jayakrishna"
  }
  value3 = {
    registrationNumber : "krishna",
    brand: "kripa"
  }
  car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(location: any){
        console.log(this.registrationNumber + " " + this.brand + " " +location);
    }
  }






  constructor() { }

  ngOnInit(): void {
    this.car.displayDetails("payyanur");
    this.car.displayDetails.call(this.value, "kannur");
    this.car.displayDetails.apply(this.value2, ["kannur"]);
    this.new = this.car.displayDetails.bind(this.value3, "kozhikode");
    



    this.facebook.facebooklogin("facebook");
    this.facebook.facebooklogin.call(this.instagram, "instagram");
    this.facebook.facebooklogin.apply(this.instagram, ["instagram"]);
    this.bindcode = this.facebook.facebooklogin.bind(this.instagram, "twitter1")
    this.bindcode2= this.facebook.facebooklogin.bind(this.instagram, ["twitter2"])
    this.bindcode();
    this.bindcode2();
    
    
  }

  method():void {
    
  }

  
  instagram = {
     username: "jayakrishnanni@gmail.com",
     passowrd : "Halmrk1*",
  }

  facebook = {
    username: "jayakrishnanni@gmail.com",
    passowrd : "Halmrk1*",
  
    facebooklogin: function(facebook: any) {
      console.log(this.username + " " + this.passowrd + " " +facebook)
    }
  }



}
