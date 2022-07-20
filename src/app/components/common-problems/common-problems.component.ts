import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-common-problems',
  templateUrl: './common-problems.component.html',
  styleUrls: ['./common-problems.component.css']
})
export class CommonProblemsComponent implements OnInit {
  myForm: FormGroup;

  inputname: any;
  template: any;
  usersname = ['sachin'];
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      check: new FormControl('', Validators.required)
    });

    // // to reverse a string
    // this.reverse();

    // //decrementing order
    // this.highertolowser();

    // //incrementing order
    // this.lowertohigher();

    // // to convert the string to an array
    // this.toanArray();

    // //to reverse an number
    //  this.reverseanumber();

    // //foreach usage
    // this.foreachusage()

    // //for loop usage
    // this.forloopusage()

    //  // to convert the string to an array
    //  this.toanArray();

    // //find duplicate elements in an array
    // this.findDuplicate();


    // // elements in an array without dulplicate
    // this.withoutDuplicate() 

    //settimeout
    // this.settimeout();

    //documentwrite
    // this.documentwrite();

    // sample object
    // this.Object();

    //typeof
    // this.typeof();

    //removing entire data from an array
    //this.deleteanArray(); 

    // sum of an array
    //sum()

    // count   
    //this.count();

    // add to an object
    //this.addtoAnObject();

    // sorting of keyvaluepaid
    //this.keyValuePair();
  }

  // to sort a string
  toSortAString() {
    const names = ["sachin", "dipin", "kunson"];
    console.log(names.sort())
  }

  // concat - adding two arrays
  concat() {
    var number = [1, 3, 4, 5, 6, 67, 7, 76, 4, 3, 23, 2, 2];
    var number2 = [2, 3, 4, 5, 6, 67, 5];
    console.log(number.concat(number2))
  }


  // shift method - delete first element of an array
  shift() {
    var number = [1, 3, 4, 5, 6, 67, 7, 76, 4, 3, 23, 2, 2];
    number.shift();
    console.log(number);
  }

  //unshift method - adding new element of an array
  unshift() {
    var number = [1, 3, 4, 5, 6, 67, 7, 76, 4, 3, 23, 2, 2];
    number.unshift(5);
    console.log(number);
  }

  // minimum of a number
  minimumNumber() {
    var number = [1, 3, 4, 5, 6, 67, 7, 76, 4, 3, 23, 2, 2];
    let min = number[0];
    for (let i = 0; i <= number.length; i++) {
      if (number[i] <= min) {
        min = number[i];
      }
    }
    console.log(min)
  }

  // maximum of a number
  maxNumber() {
    var number = [1, 3, 4, 5, 6, 67, 7, 76, 4, 3, 23, 2, 2];
    let max = number[0];

    for (let i = 0; i <= number.length; i++) {
      if (number[i] >= max) {
        max = number[i];
      }
    }

    console.log(max)
  }

  // string length
  stringLength() {
    var keyvalue = "hello";
    console.log(keyvalue.length)
  }


  // add an object seperatly
  addanObjectSeparetly() {
    var keyvalue = [
      { id: 1, color: 'black' },
      { id: 4545, color: 'black' },
      { id: 4, color: 'black' },
      { id: 6534, color: 'black' },
    ];
    keyvalue.push({ id: 9999, color: "pink" })
    console.log(JSON.stringify(keyvalue));
  }

  // sorting of keyvaluepaid
  keyValuePair() {
    var keyvalue = [
      { id: 1, color: 'black' },
      { id: 4545, color: 'black' },
      { id: 4, color: 'black' },
      { id: 6534, color: 'black' },
    ];
    var keyvaluesort = keyvalue.sort((a, b) => a.id - b.id);
    console.log(JSON.stringify(keyvaluesort));

  }

  // add to an object
  addtoAnObjectinSame() {
    // const arr = [{id: 1}, {id: 2}];

    // arr.forEach(object => {
    //   object.color = 'red';
    // });
    // console.log(JSON.stringify(arr));
    //[{"id":1,"color":"red"},{"id":2,"color":"red"}]
  }


  // count   
  count() {
    //   var letters = ['a','a','a','b','b', 1,{id:"sachin"}];
    //   var cound = {};
    //   letters.forEach((items)=>{
    //   if(cound[items]) {
    //     cound[items] ++;
    //   } else{
    //     cound[items] =1;
    //   } 

    // })


    // console.log(cound)
  }

  call(): void {
    console.log('this.test' + JSON.stringify(this.myForm.value.check));
  }



  add(): void {
    console.log('Hello >>>' + JSON.stringify(this.inputname));
    this.usersname.push(this.inputname);
    this.inputname = '';
  }


  // to reverse a string
  reverse() {
    var string = "Hello Namaste"
    var revsere = string.split('').reverse().join('');
    console.log('reverse a string ' + string + ' ' + revsere);
  }


  //decrementing order
  highertolowser() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var highest = numbers.sort((a, b) => b - a)
    console.log("higher number to lower nummber " + highest + 'from' + numbers + 'array');
  }


  //incrementing order
  lowertohigher() {
    var numbers = [1, 2, 3, 4, 5, 6, 99, 7, 8, 9];
    var highest = numbers.sort((a, b) => a - b)
    console.log("lower number to higher nummber" + highest + 'from' + numbers + 'array');
  }


  // to convert the string to an array
  toanArray() {
    var names = 'Harry,John,Clark,Peter,Rohn,Alice';
    var nameArr = names.split(',');
    console.log('to an array' + nameArr + 'from' + names);
    console.log('to an array nameArr[0]' + nameArr[0]) //Harry
    console.log('to an array name[0]' + names[0])  // H
  }


  //to reverse an number
  reverseanumber() {
    var number = 123;
    var revsernumber = number.toString().split('').reverse().join('');
    console.log('reverse a number' + revsernumber)
  }

  //foreach usage
  foreachusage() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var froeachnumbers = numbers.forEach((items) => {
      console.log('foreach' + items);
    })
  }

  //for loop usage
  forloopusage() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
      result.push(numbers[i] * 2)
    }
    console.log(result);
  }

  //find duplicate elements in an array
  findDuplicate() {
    const arry = [1, 2, 1, 3, 4, 3, 5];
    const toFindDuplicates = arry.filter((item, index) => arry.indexOf(item) !== index)
    console.log(toFindDuplicates);
  }

  // elements in an array without dulplicate
  withoutDuplicate() {
    const arry = [1, 2, 1, 3, 4, 3, 5];
    const toFindDuplicates = arry.filter((item, index) => arry.indexOf(item) == index)
    console.log(toFindDuplicates);
  }


  //occurance of a number in an array

  //   occurrences() {
  //     const myArray = [false, 24, "English", false, "english", 22, 19, false, "English", 19];

  //     let countObject = myArray.reduce(function (
  //         count,
  //         currentValue
  //     ) {
  //         return (
  //             count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
  //             count
  //         );
  //     },
  //     {});

  //     console.log(countObject);
  // }

  // settimeout 
  settimeout() {
    setTimeout(() => console.log('HELLO'), 4000);
    console.log("HELLO2");
  }


  //documet.write
  documentwrite() {
    //console.log(document.write(5+7+"sachin"+5)) 
    // Argument of type 'number' is not assignable to parameter of type 'string'.

    // console.log(window.alert('hi'));

    // const number = 1234 
    // const stringNumber = '1234' 
    // if(number == stringNumber) {
    //   console.log(number == stringNumber)
    // }

    console.log(typeof ("5"))


  }


  // sample object
  Object() {
    const abc = { type: "Fiat", model: "2010" }
    console.log(abc.type)
  }

  // person?: object;
  // delete object
  // deleteObject() {
  //   var person = {
  //     firstName:"John",
  //     lastName:"Doe",
  //     age:50,
  //     eyeColor:"blue"
  //   };
  //   delete person.age
  //   console.log(person)

  // }


  //typeof
  typeof() {
    console.log('type of 1 is ' + typeof (1))
    console.log('type of "1" is ' + typeof ("1"))
    console.log('type of NaN is ' + typeof (NaN))
    console.log('type of false is ' + typeof (false))
    console.log('type of [] is ' + typeof ([]))
    console.log('type of {} is ' + typeof ({}))
    console.log('type of "" is ' + typeof (""))
  }


  //removing entire data from an array
  deleteanArray() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // let array6 = {"dhdhdh "}
    //array =[];
    //console.log('array delete method 1' + array)
    //let b =array.length = 0;
    //console.log('array delete method 2  ' + b)
    array.splice(0, array.length)
    array3.pop();
    array4.shift();
    array5.unshift(6);
    // array6.trim();
    let c = array2.slice(0, array.length)
    // console.log('array delete method 3  ' + array)
    // console.log('array delete method 4  ' + c)
    // console.log('array delete method 5  ' + array3)
    // console.log('array delete method 6  ' + array4)
    // console.log('array delete method 7  ' + array4)
    console.log('array delete method 7  ' + array4)
  }

  // sum of an array
  sum() {
    var array = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    var arraysum = array.forEach((item) => (sum += item));
    console.log(sum);
  }



}

