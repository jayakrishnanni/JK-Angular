import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthServiceService } from "../../service/auth-service.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  errorMsg: string | any;

  loginForm: FormGroup;

  constructor(private authService : AuthServiceService,
              private router: Router,
  ) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required),
    });
  }

  onSubmit() {
    
     let data = this.loginForm.value;
    if(this.loginForm.value.username == '' && this.loginForm.value.password == '') {
    this.errorMsg = 'Please enter username and password'
    }
     if(data) {
       if(this.loginForm.value.username == 'chipmunk' && this.loginForm.value.password == 'chipmunk'){
        this.authService.login();
         this.router.navigate(['/dashboard']);
       }
       else {
         this.errorMsg = 'Incorrect username or password';
         this.authService.logout();
       }
     }
  }

}
