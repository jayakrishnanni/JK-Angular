import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {
  myform !: FormGroup<{ check: FormControl<string | null>; }>;
  constructor() { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      check: new FormControl ('', Validators.required)
    })
  }

  click(): void {
      console.log('chceking >>>' + JSON.stringify(this.myform.value))
  }

}
