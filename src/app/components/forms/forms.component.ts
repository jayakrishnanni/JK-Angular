import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  myForm !: FormGroup<{ user: FormControl<string | null>; }>;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      user: new FormControl('',Validators.required)
    })
  }

  click(): void {
    console.log("value>>>" +JSON.stringify(this.myForm.value))
  }

}
