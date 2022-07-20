import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { ErrorpageComponent } from "./components/errorpage/errorpage.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditDetailsComponent } from "./components/edit-details/edit-details.component";
import { UsersComponent } from './components/users/users.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AuthGuard } from './guards/auth.guard';
import { CommonProblemsComponent } from './components/common-problems/common-problems.component';
import { FormgroupComponent } from './components/formgroup/formgroup.component';
import { FormsComponent } from './components/forms/forms.component';
import { TableComponent } from './components/table/table.component';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { FilterMapReduceComponent } from './components/filter-map-reduce/filter-map-reduce.component';
import { SortSearchComponent } from './components/sort-search/sort-search.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'countries/edit/:id', component: EditDetailsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'customer', component: CustomersComponent},
  {path: 'problems', component: CommonProblemsComponent},
  {path: 'formgroup', component: FormgroupComponent},
  {path: 'table', component: TableComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'callapplybind', component: CallApplyBindComponent},
  {path: 'filtermapreduce', component: FilterMapReduceComponent},
  {path: 'commonproblems', component: CommonProblemsComponent},
  {path: 'sortfilter', component: SortSearchComponent},
  
  {path: '**', component: ErrorpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HttpClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
