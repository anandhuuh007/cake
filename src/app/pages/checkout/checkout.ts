import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PRODUCTS, Product } from '../../shared/data/products';
import { Toast } from '../../shared/services/toast';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  product: Product | undefined;
  weight: string = '';
  quantity: number = 1;
  totalPrice: number = 0;

  // Form Fields
  customerName: string = '';
  customerPhone: string = '';
  customerAddress: string = '';
  customerPincode: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: Toast
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];
      this.weight = params['weight'] || '1.0 kg';
      this.quantity = +params['quantity'] || 1;
      this.totalPrice = +params['price'] || 0;

      if (productId) {
        this.product = PRODUCTS.find(p => p.id === productId);
      }
    });
  }

  onSubmit() {
    if (!this.customerName.trim()) {
      this.toast.show('Please enter your name.', 'error');
      return;
    }
    if (!this.customerPhone.trim()) {
      this.toast.show('Please enter your phone number.', 'error');
      return;
    }
    if (!this.customerAddress.trim()) {
      this.toast.show('Please enter your delivery address.', 'error');
      return;
    }
    if (!this.customerPincode.trim()) {
      this.toast.show('Please enter your pincode.', 'error');
      return;
    }

    // Save order
    const orders = JSON.parse(localStorage.getItem('sweet_layers_orders') || '[]');
    const newOrder = {
      orderId: 'SL-' + Math.floor(100000 + Math.random() * 900000),
      product: {
        id: this.product?.id,
        name: this.product?.name,
        image: this.product?.image,
        price: this.product?.price
      },
      weight: this.weight,
      quantity: this.quantity,
      totalPrice: this.totalPrice,
      customerName: this.customerName,
      customerPhone: this.customerPhone,
      customerAddress: this.customerAddress,
      customerPincode: this.customerPincode,
      date: new Date().toISOString(),
      status: 'Baking'
    };

    orders.unshift(newOrder); // Prepend to show newest orders first
    localStorage.setItem('sweet_layers_orders', JSON.stringify(orders));

    this.toast.show('Order Placed Successfully! Your cake is baking.', 'success');
    this.router.navigate(['/orders']);
  }
}
