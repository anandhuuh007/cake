import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRevealCard } from '../../shared/components/product-reveal-card/product-reveal-card';
import { PRODUCTS, Product } from '../../shared/data/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductRevealCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  searchQuery: string = '';
  sortBy: string = 'featured';
  allProducts: Product[] = PRODUCTS;

  get filteredProducts(): Product[] {
    let products = this.allProducts.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (this.sortBy === 'price-asc') {
      products.sort((a, b) => a.priceNum - b.priceNum);
    } else if (this.sortBy === 'price-desc') {
      products.sort((a, b) => b.priceNum - a.priceNum);
    } else if (this.sortBy === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    }

    return products;
  }

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  onSortChange(event: Event) {
    this.sortBy = (event.target as HTMLSelectElement).value;
  }
}
