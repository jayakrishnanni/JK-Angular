import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { ErrorpageComponent } from '../app/components/errorpage/errorpage.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { CountriesComponent } from '../app/components/countries/countries.component';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';
import { EditDetailsComponent } from '../app/components/edit-details/edit-details.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from '../app/components/users/users.component';
import { CustomersComponent } from './components/customers/customers.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorpageComponent,
    DashboardComponent,
    CountriesComponent,
    SidebarComponent,
    EditDetailsComponent,
    UsersComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
