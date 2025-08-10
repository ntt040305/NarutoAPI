import { Component } from '@angular/core';
import {CharacterModel} from '../../../model/character.model';
import {Naruto2Service} from '../../services/naruto2/naruto2.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {CharacterItemModel} from '../../../model/character.item.model';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-storage1',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    AsyncPipe
  ],
  templateUrl: './storage1.component.html',
  styleUrl: './storage1.component.scss'
})
export class Storage1Component {

  myStorage$!: Observable<CharacterModel>;
  myStorage: CharacterItemModel[] = [];
  subscriptions: Subscription[] = [];

constructor(
  private naruto2Service: Naruto2Service,
  private router:Router) {



  this.myStorage$ = this.naruto2Service.getData();

  this.subscriptions.push(
    this.myStorage$.subscribe((data: CharacterModel) => {
        this.myStorage = data.characters;
        console.log(this.myStorage);
      }
    )
    // console.log(this.myData$);
  )
}

ngOnInit(): void {
  // throw new Error('Method not implemented.');
}
// ngOnDestroy() {
//   this.subcriptions.forEach(subcription => subcription.unsubscribe())
// }
}
