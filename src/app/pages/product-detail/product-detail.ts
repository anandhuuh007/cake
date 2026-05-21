import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PRODUCTS, Product } from '../../shared/data/products';
import { Toast } from '../../shared/services/toast';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product!: Product;
  activeImage: string = '';
  activeWeight: string = '';
  quantity: number = 1;
  activeTab: 'ingredients' | 'delivery' = 'ingredients';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: Toast
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const foundProduct = PRODUCTS.find(p => p.id === id);
      
      if (foundProduct) {
        this.product = foundProduct;
        this.activeImage = foundProduct.image;
        this.activeWeight = foundProduct.weights ? foundProduct.weights[0].label : '1.0 kg';
        this.quantity = 1;
      }
    });
  }

  get calculatedPrice(): number {
    if (!this.product) return 0;
    
    // Check if selected weight has a price multiplier
    const selectedWeightObj = this.product.weights?.find(w => w.label === this.activeWeight);
    const multiplier = selectedWeightObj ? selectedWeightObj.priceMultiplier : 1;
    
    return Math.round(this.product.priceNum * multiplier * this.quantity);
  }

  get discountPercentage(): number {
    if (!this.product || !this.product.originalPrice) return 0;
    const original = parseFloat(this.product.originalPrice.replace('$', ''));
    if (isNaN(original) || original === 0) return 0;
    return Math.round(((original - this.product.priceNum) / original) * 100);
  }

  changeImage(img: string) {
    this.activeImage = img;
  }

  selectWeight(weight: string) {
    this.activeWeight = weight;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  setTab(tab: 'ingredients' | 'delivery') {
    this.activeTab = tab;
  }

  buyNow() {
    this.router.navigate(['/checkout'], {
      queryParams: {
        productId: this.product.id,
        weight: this.activeWeight,
        quantity: this.quantity,
        price: this.calculatedPrice
      }
    });
  }
}
