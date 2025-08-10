import { Component } from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
// import {
//   MatCard,
//   MatCardActions,
//   MatCardContent,
//   MatCardHeader, MatCardImage,
//   MatCardSubtitle,
//   MatCardTitle
// } from '@angular/material/card';
// import {MatButton} from '@angular/material/button';
import {CardComponent} from '../../component/card/card.component';

@Component({
  selector: 'app-home',
  imports: [
    // CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productHome: ProductModel[] = []

  constructor(
    private router: Router,
    private productService: ProductService) {
    console.log(this.productService.productList)
    this.productHome = this.productService.productList

  }

  goToPage() {
    this.router.navigate(['/cart']);
  }
  goPage()  {
    this.router.navigate(['/storage1']);
  }
}
