import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {ProductModel} from '../../models/product.model';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';

@Component({
  selector: 'app-detail',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  productDetail!: ProductModel


  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
    let {id} = this.activatedRoute.snapshot.params;
    this.productDetail = this.productService.getDetailProduct(id)
     console.log(this.productDetail);
  }
}
