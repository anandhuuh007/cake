import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface OrderItem {
  orderId: string;
  product: {
    id: string;
    name: string;
    image: string;
    price: string;
  };
  weight: string;
  quantity: number;
  totalPrice: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerPincode?: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  orders: OrderItem[] = [];

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    const saved = localStorage.getItem('sweet_layers_orders');
    if (saved) {
      try {
        this.orders = JSON.parse(saved);
      } catch (e) {
        this.orders = [];
      }
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'baking':
        return 'bg-amber-100 text-amber-900 border-amber-200/50';
      case 'delivering':
        return 'bg-blue-100 text-blue-900 border-blue-200/50';
      case 'delivered':
        return 'bg-emerald-100 text-emerald-900 border-emerald-200/50';
      default:
        return 'bg-zinc-100 text-zinc-900 border-zinc-200/50';
    }
  }

  clearOrders() {
    localStorage.removeItem('sweet_layers_orders');
    this.orders = [];
  }
}
