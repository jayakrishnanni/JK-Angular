// app-routing.module.spec.ts
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: '**', redirectTo: '/home' }
      ])],
      declarations: [
        HomeComponent,
        AboutComponent,
        AppComponent
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation(); // Trigger initial navigation
  });

  it('should navigate to "home" when path is empty', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  it('should navigate to "about" when path is "about"', fakeAsync(() => {
    router.navigate(['about']);
    tick();
    expect(location.path()).toBe('/about');
  }));

  it('should redirect to "home" when navigating to a non-existing route', fakeAsync(() => {
    router.navigate(['non-existing-route']);
    tick();
    expect(location.path()).toBe('/home');
  }));
});