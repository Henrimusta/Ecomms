import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      image: 'favicon.ico',
      price: 100,
      stock: 0
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'favicon.ico',
      price: 200,
      stock: 20
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
