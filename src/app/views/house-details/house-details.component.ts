import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  endpoint: any = "/house/";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEnpointHouse()
  }

  private getEnpointHouse() {
    this.endpoint = this.endpoint + this.route.snapshot.paramMap.get('nameHouse');
    console.log(this.endpoint)


  }
}
