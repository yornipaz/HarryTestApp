import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character.interfase'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private querySearch = new BehaviorSubject("defualt data");
  // currenSearch = this.querySearch.asObservable()
  constructor(private http: HttpClient) {



  }
  getDatCharaters(enpoint: string): Observable<Character[]> {
    let enpointRute = `${environment.baseUrlApi}${enpoint}`;
    return this.http.get<Character[]>(enpointRute);
  }
  /**changeQuerySearch(search: string) {
 this.querySearch.next(search)
}**/




}
