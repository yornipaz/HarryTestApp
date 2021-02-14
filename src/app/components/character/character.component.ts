import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
import { Character } from '../../models/character.interfase'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public Characters: Character[] = [];
  @Input() endpoint: any

  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getCharacters(this.endpoint);
  }

  private getCharacters(enpoint: any): void {

    this.api.getDatCharaters(enpoint).subscribe(data => {
      this.Characters = [...this.Characters, ...data];

    })
  }

}
