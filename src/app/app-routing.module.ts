import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { ErrorpageComponent } from "./components/errorpage/errorpage.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditDetailsComponent } from "./components/edit-details/edit-details.component";
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'countries/edit/:id', component: EditDetailsComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', component: ErrorpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HttpClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
