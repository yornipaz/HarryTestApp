import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  private ruteHouse: string = "";
  endpoint: string = "/house/";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEnpointHouse()
  }

  private getEnpointHouse() {
    this.ruteHouse = this.route.snapshot.paramMap.get('nameHouse') || "";
    this.endpoint = this.endpoint.concat(this.ruteHouse)
    //console.log(this.endpoint)


  }
}
