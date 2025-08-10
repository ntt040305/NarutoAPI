import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterItemModel} from '../../../model/character.item.model';
import {CharacterModel} from '../../../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class Naruto2Service {

  myUrl= 'https://dattebayo-api.onrender.com/characters?page=1&limit=200'

  constructor(private http:HttpClient) {

  }

  getData (): Observable<CharacterModel>
  {
    return this.http.get<CharacterModel>(this.myUrl);
  }

  getDetailCharacter (id: number): Observable<CharacterItemModel> {
    console.log(id);
    return this.http.get<CharacterItemModel>(`https://dattebayo-api.onrender.com/characters/${id}`);
  }
}
