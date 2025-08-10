import {Component, Input} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-card',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: ProductModel

  constructor(private router: Router, private productService: ProductService) {

  }
  addToCart(id:string) {
    this.productService.addProductToCart(id)
  }
  navigatetoDetail (id:string)  {
    this.router.navigate(['/detail/', id]).then();
  }
}
