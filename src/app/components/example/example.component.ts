import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/service/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  postData: any;
  userData: any;
  match: any;
  objectvalue: any;
  constructor(private example : ExampleService) { }

  ngOnInit(): void {
     this.example.examplePosts().subscribe((postdata: any)=>{
          this.postData = postdata;
          console.log('postData' + JSON.stringify(this.postData))
     }) 
     this.example.exampleUsers().subscribe((userdata: any)=>{
      this.userData = userdata;
      console.log('userData' + JSON.stringify(this.userData))
 }) 
 }

 postdataCall(id: any) {
  this.postData.filter((items:any)=> {
      if(id == items.id) {
        this.objectvalue = items.id;
        console.log('hello'  + JSON.stringify(this.objectvalue));
      }
  })
 }

}
