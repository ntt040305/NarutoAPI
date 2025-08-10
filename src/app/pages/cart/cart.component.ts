import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product/product.service';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {Observable, Subscription} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {CharacterItemModel} from '../../../model/character.item.model';
import {Router} from '@angular/router';
import {Naruto2Service} from '../../services/naruto2/naruto2.service';
import {CharacterModel} from '../../../model/character.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCard,
    MatButton,
    MatCardImage,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
  // productCart : ProductModel[] = []

  myData$: Observable<CharacterModel>;
  myData: CharacterItemModel []= [];
  subcriptions: Subscription[] = [];


  constructor(
    // public productService: ProductService,
    private naruto2Service: Naruto2Service,
    private router:Router) {
    // this.productCart=productService.productList


    this.myData$ = this.naruto2Service.getData();

    this.subcriptions.push(
      this.myData$.subscribe((data: CharacterModel) => {
        this.myData = data.characters;
        console.log(this.myData);
      }
    )
    // console.log(this.myData$);
   )
  }

  ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }
  ngOnDestroy() {
    this.subcriptions.forEach(subcription => subcription.unsubscribe())
  }

  navigateToCharacterFocus(id: number) {
    this.router.navigate([`/character-focus`, id]).then();
  }
}
