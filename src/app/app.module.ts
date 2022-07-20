import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  , FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from '../app/components/users/users.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { CommonProblemsComponent } from './components/common-problems/common-problems.component';
import { FormgroupComponent } from './components/formgroup/formgroup.component';
import { FormsComponent } from './components/forms/forms.component';
import { TableComponent } from './components/table/table.component';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { FilterMapReduceComponent } from './components/filter-map-reduce/filter-map-reduce.component';
import { SortSearchComponent } from './components/sort-search/sort-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2PaginationModule } from 'ng2-pagination';

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
    CustomersComponent,
    CommonProblemsComponent,
    FormgroupComponent,
    FormsComponent,
    TableComponent,
    CallApplyBindComponent,
    FilterMapReduceComponent,
    SortSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule
    // Ng2OrderModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
