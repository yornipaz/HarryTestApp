import { Injectable } from '@angular/core';
import { House } from '../models/houseModel';
import { Menber } from '../models/menberModel';
import { Character } from '../models/character.interfase'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {



  }
  getDatCharaters(enpoint: string): Observable<Character[]> {
    let enpointRute = `${environment.baseUrlApi}${enpoint}`;
    return this.http.get<Character[]>(enpointRute);
  }




}
