import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardHouseComponent } from './components/card-house/card-house.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/character/character.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { HousesComponent } from './views/houses/houses.component';
import { HouseDetailsComponent } from './views/house-details/house-details.component';
import { CharacterFilterComponent } from './views/character-filter/character-filter.component';
import { CardFiltercharacterComponent } from './components/card-filtercharacter/card-filtercharacter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardHouseComponent,

    CharacterComponent,
    FormSearchComponent,

    HousesComponent,
    HouseDetailsComponent,
    CharacterFilterComponent,
    CardFiltercharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
