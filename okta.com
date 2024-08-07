import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  accessToken: string | undefined;
  userDetails: any;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    // Handle the authentication callback
    if (this.route.snapshot.fragment && this.route.snapshot.fragment.includes('id_token')) {
      console.log('Handling authentication callback');
      await this.authService.handleAuthentication();
      this.router.navigate(['/']);
    }

    console.log('Checking authentication status');
    this.isAuthenticated = await this.authService.isAuthenticated();

    if (this.isAuthenticated) {
      console.log('User is authenticated');
      this.accessToken = await this.authService.getAccessToken();
      this.userDetails = await this.authService.getUserDetails();
    } else {
      console.log('User is not authenticated, redirecting to sign-in');
      await this.authService.signIn();
    }
  }
}