import { Component, OnInit } from '@angular/core';
import { House } from '../../models/houseModel';
import { ApiService } from '../../service/api.service'


@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.scss']
})
export class CardHouseComponent implements OnInit {
  houses: House[] = [];
  private path: string = "/house/";


  constructor(private api: ApiService) { }

  ngOnInit(): void {


    this.houses = [
      {
        id: 1,
        name: "ravenclaw",
        imgSrc: "https://4.bp.blogspot.com/-FfxqfrKt9UA/V_ENUpNkHuI/AAAAAAABCrE/a16s6N7zEBIsWl8-QAw5oQk9AMMcYFr2gCEw/s320/ravenclaw.jpg",
        menbers: 0
      },
      {
        id: 2,
        name: "gryffindor",
        imgSrc: "https://1.bp.blogspot.com/-WV_sb7UjMIo/V_ENTue9HCI/AAAAAAABCrA/XocZ5xwp9mo7DSoaB-qXU_AxLKC7e2DbgCEw/s320/gryffindor.jpg",
        menbers: 0
      }, {
        id: 3,
        name: "hufflepuff",
        imgSrc: "https://2.bp.blogspot.com/-UcA_FGXVBHQ/V_EN4vkmPFI/AAAAAAABCrM/LjhvcqfOo841_NmuelBqFW40dz7zxG9QQCLcB/s320/hufflepuff.jpg",
        menbers: 0
      }, {
        id: 4,
        name: "slytherin",
        imgSrc: "https://1.bp.blogspot.com/-nQCYFpQIJQQ/V_ENVM7G_ZI/AAAAAAABCrI/5FfjP0hh6skEKKbGP5yhd17gqrkeYymUQCEw/s320/slytherin.jpg",
        menbers: 0
      }

    ];

    this.counterHouseMenber(this.housePaths(this.houses));

  }

  private counterHouseMenber(nameHouse: string[]) {
    nameHouse.forEach((name, index) => {
      let pathHouse = this.path.concat(name)
      this.api.getDatCharaters(pathHouse).subscribe((res) => {
        this.houses[index].menbers = res.length
      });

    })

  }

  private housePaths(houses: House[]): string[] {
    let nameHouse = houses.map(houses => houses.name);

    return nameHouse;

  }
}