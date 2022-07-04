import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorpageComponent,
    DashboardComponent,
    CountriesComponent,
    SidebarComponent,
    EditDetailsComponent,
    UsersComponent
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
