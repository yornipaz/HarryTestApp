import { QueryValueType } from '@angular/compiler/src/core';
import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }
  onSearch(search: string) {
    if (search && search.length > 3) {
      this.router.navigate(['filter-characters'], { queryParams: { s: search } });
      //this.api.changeQuerySearch(search);
    }



  }
}
