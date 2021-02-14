import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseDetailsComponent } from './views/house-details/house-details.component';
import { HousesComponent } from './views/houses/houses.component';
import { CharacterFilterComponent } from './views/character-filter/character-filter.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'houses',
    pathMatch: 'full'
  },


  { path: 'houses', component: HousesComponent },
  { path: 'house-details/:nameHouse', component: HouseDetailsComponent }, { path: 'filter-characters', component: CharacterFilterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
