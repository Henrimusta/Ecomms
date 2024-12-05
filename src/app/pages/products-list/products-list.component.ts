import { Component, signal } from '@angular/core';
import { Product } from '../../../models/products.models';
import { ProductCardComponent } from "./product-card/product-card.component";


@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
  <div class="grid grid-cols-2 gap-4 p-8">
    @for (product of products(); track product.id) {
      <app-product-card [product]="product"/>
    }
</div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
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
    {
      id: 3,
      title: 'Product 3',
      image: 'favicon.ico',
      price: 300,
      stock: 30
    },
    {
      id: 4,
      title: 'Product 4',
      image: 'favicon.ico',
      price: 400,
      stock: 40
    },
    {
      id: 5,
      title: 'Product 5',
      image: 'favicon.ico',
      price: 500,
      stock: 50
    },
    {
      id: 6,
      title: 'Product 6',
      image: 'favicon.ico',
      price: 600,
      stock: 60
    },
    {
      id: 7,
      title: 'Product 7',
      image: 'favicon.ico',
      price: 700,
      stock: 70
    },
    {
      id: 8,
      title: 'Product 8',
      image: 'favicon.ico',
      price: 800,
      stock: 80
    },
    {
      id: 9,
      title: 'Product 9',
      image: 'favicon.ico',
      price: 900,
      stock: 90
    },
    {
      id: 10,
      title: 'Product 10',
      image: 'favicon.ico',
      price: 1000,
      stock: 100
    },
  ]);
}
