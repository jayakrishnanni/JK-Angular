import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthServiceService } from "../service/auth-service.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  errorMsg: string | any;



  constructor(private authService : AuthServiceService,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
     let data = this.loginForm.value;
    if(this.loginForm.value.username == '' && this.loginForm.value.password == '') {
    this.errorMsg = 'Please enter username and password'
    }
     if(data) {
       if(this.loginForm.value.username == 'fingent' && this.loginForm.value.password == 'fingent'){
         this.router.navigate(['/dashboard']);
       }
       else {
         this.errorMsg = 'Incorrect username or password';
       }
     }
  }

}
