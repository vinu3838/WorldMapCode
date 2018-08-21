import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllRegionComponent } from './all-region/all-region.component';
import { AgmCoreModule } from '@agm/core'
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng4-click-outside';
import { AppRoutingModule } from './app-routing.module';
import { CountriesModule } from './countries/countries.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllRegionComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ClickOutsideModule,
    CountriesModule,
    AppRoutingModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTBDE3RCeq6lFU9AeYci4Viv_pCh9Hz7U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
