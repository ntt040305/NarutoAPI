import { Injectable } from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartList: ProductModel[]=[];
  constructor() { }
  productList: ProductModel[] = [
    {
      id: "1",
      name: 'Siêu tiết kiệm 1',
      price: 20,
      imageUrl: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisaver_1-min.png",
      quantity: 0,
    },
    {
      id: "2",
      name: 'Siêu tiết kiệm 2',
      price: 30,
      imageUrl: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisavers_2-min.png",
      quantity: 0,
    },
    {
      id: "3",
      name: 'Siêu tiết kiệm 3',
      price: 40,
      imageUrl: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisavers_3-min.png",
      quantity: 0,
    },
    {
      id: "4",
      name: 'Cặp đôi ăn ý',
      price: 40,
      imageUrl: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_2_2__1.png",
      quantity: 0,
    },

  ]
  // truyen id
    getDetailProduct(id: string):ProductModel  {
    let product = this.productList.find(item =>item.id == id );
    if (product) {
      return product; }else {
      return {} as ProductModel;
    }
    }
    addProductToCart(id:string){
    let product = this.productList.find(item =>item.id == id);
    if (product) {
      let productInCart = this.cartList.find(itemCart => product.id === itemCart.id);
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        product.quantity += 1;
        this.cartList.push(product);
      }
    }
    console.log(this.cartList);
  }


}
