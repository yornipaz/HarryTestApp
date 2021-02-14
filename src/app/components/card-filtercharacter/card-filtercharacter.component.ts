import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/character.interfase';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-card-filtercharacter',
  templateUrl: './card-filtercharacter.component.html',
  styleUrls: ['./card-filtercharacter.component.scss']
})
export class CardFiltercharacterComponent implements OnInit {
  querySearch: string = "";
  private characters: Character[] = [];
  datafill: Character[] = [];
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuerySearch();
    this.getDataCharacter();
  }
  private getQuerySearch(): void {
    this.route.queryParams.subscribe(params => {
      this.querySearch = params['s'];

      this.filterCharacterByQuery(this.querySearch)



    });

  }
  private getDataCharacter(): void {
    this.api.getDatCharaters("").subscribe(data => {
      this.characters = data


    })
  }


  private filterCharacterByQuery(query: string): void {

    let queryCapitalize = this.capitalize(query)
    let filCharacter = this.characters.filter(data => data.name.split(" ")[0] === queryCapitalize
      || data.name.split(" ")[1] === queryCapitalize || data.eyeColour === query
    )
    this.datafill = filCharacter
    console.log(filCharacter)


  }
  private capitalize(String: string): string {
    if (!String) return String;
    let value = String[0].toUpperCase() + String.slice(1)
    console.log(value)
    return value;
  }
}
