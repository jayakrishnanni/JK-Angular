import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.css']
})
export class CoffeeMachineComponent implements OnInit {
  coffees: any;
  coffeeSelectiondata: any
  data: any
  coffeeSelectiondatacontent: any;
  coffeeQty: any;
  
  constructor() { }

  ngOnInit(): void {
     this.coffees = [{type:'tea', content:[{contenttype: 'sugar'},{contenttype: 'milk'},{contenttype: 'tea'}]},{type:'coffee', content:[{contenttype: 'sugar'},{contenttype: 'milk'},{contenttype: 'tea'}]},{type:'blackcoffee', content:[{contenttype: 'sugar'},{contenttype: 'milk'},{contenttype: 'tea'}]}];
     console.log('hello' +this.coffees);
  }

  coffeeSelection(datas: any) {
    
      //   this.coffees.forEach((item: any)=> {
      //   if(datas.type ==  item.type) {
      //     this.coffeeSelectiondata = true;
      //   } else{
      //     this.coffeeSelectiondata = false;
      //   }
      //  } ) 
      for(let ele of this.coffees){
         if(ele.type==datas.type) {
            ele.selected = true
          
         }else {
          ele.selected = false
         }
         
      }

      console.log('jkkk this.coffees ' +JSON.stringify(this.coffees))
     
  }
  minus(coffeeQty: any, content: any) {
    console.log('jkkk coffeeQty ' +JSON.stringify(coffeeQty))
    console.log('jkkk content ' +JSON.stringify(content))
  }
  plus(coffeeQty: any,content: any) {
    console.log('jkkk coffeeQty ' +JSON.stringify(coffeeQty))
    console.log('jkkk content ' +JSON.stringify(content))
  }
}
