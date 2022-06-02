import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  constructor() {}

  products: Product[] = [
    {
      name: 'Intelligent Steel Soap',
      price: 392.0,
      description: 'The Bast Of Intelligent Steel Soap',
    },
    {
      name: 'Rustic Plastic Chair',
      price: 374.0,
      description: 'The Bast Of Rustic Plastic Chair',
    },
    {
      name: 'Sleek Soft Bacon',
      price: 146.0,
      description: 'The Bast Of Sleek Soft Bacon',
    },
    {
      name: 'Sleek Soft Fish',
      price: 70.0,
      description: 'The Bast Of Sleek Soft Fish',
    },
    {
      name: 'Ergonomic Wooden Salad',
      price: 5.0,
      description: 'The Bast Of Ergonomic Wooden Salad',
    },
    {
      name: 'Fantastic Soft Chicken',
      price: 422.0,
      description: 'The Bast Of Fantastic Soft Chicken',
    },
  ];
  filteredProducts: Product[] = this.products;

  ngOnInit(): void {}
  search(name: string) {
    this.filteredProducts = this.products.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchName = name.toLowerCase();
      return productName.indexOf(searchName) > -1;
    });
  }
}
