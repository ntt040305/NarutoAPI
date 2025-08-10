import { Component } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CharacterModel} from '../../../model/character.model';
import {CharacterItemModel} from '../../../model/character.item.model';
import {Naruto2Service} from '../../services/naruto2/naruto2.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'app-character-focus',
  imports: [
    AsyncPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './character-focus.component.html',
  styleUrl: './character-focus.component.scss'
})
export class CharacterFocusComponent {
  // navigateToCharacterFocus(id: number) {
  //   this.router.navigate([`/character-focus/${id}`]).then();
  // }

  myFocus$!: Observable<CharacterItemModel>;
  myFocus: CharacterItemModel[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private naruto2Service: Naruto2Service,
    private activateRouter: ActivatedRoute) {
    let {id}=this.activateRouter.snapshot.params;
    this.myFocus$=this.naruto2Service.getDetailCharacter(+id)
    console.log(id);

    console.log(this.myFocus$);

    // this.myFocus$ = this.naruto2Service.getDetailCharacter();

    // this.subscriptions.push(
    //   this.myFocus$.subscribe((data: CharacterModel) => {
    //       this.myFocus = data.characters;
    //       console.log(this.myFocus);
    //     }
    //   )
      // console.log(this.myData$);


  }
}
