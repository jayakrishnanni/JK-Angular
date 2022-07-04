import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../app/components/login/login.component";
import { ErrorpageComponent } from "../app/components/errorpage/errorpage.component";
import { CountriesComponent } from "../app/components/countries/countries.component";
import { DashboardComponent } from "../app/components/dashboard/dashboard.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {EditDetailsComponent} from "../app/components/edit-details/edit-details.component";

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
