import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ClickOutsideModule } from 'ng4-click-outside';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule }   from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ClickOutsideModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
   
  ],
  declarations: [AllCountriesComponent, CountryDetailsComponent]
})
export class CountriesModule { }
