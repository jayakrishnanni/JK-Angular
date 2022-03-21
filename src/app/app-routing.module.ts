import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { CountriesComponent } from "./countries/countries.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {EditDetailsComponent} from "./edit-details/edit-details.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'countries/edit/:id', component: EditDetailsComponent},
  {path: '**', component: ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HttpClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
