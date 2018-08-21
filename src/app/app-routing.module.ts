import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRegionComponent } from './all-region/all-region.component';
import { AllCountriesComponent } from './countries/all-countries/all-countries.component';



  const routes: Routes = [
    { path: '', component: AllRegionComponent },
    { path: 'region', component: AllRegionComponent },
   { path: 'countries', component: AllCountriesComponent },
    { path: 'countries/:region/:language/:currency', component: AllCountriesComponent },
    { path: '**', component: AllRegionComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }