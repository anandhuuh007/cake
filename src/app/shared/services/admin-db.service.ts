import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { 
  collection, 
  doc, 
  addDoc, 
  getDocs, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  serverTimestamp,
  DocumentData
} from 'firebase/firestore';

export interface ProductData {
  id?: string;
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  featured: boolean;
  soldOut: boolean;
  weights: string[];
  createdAt?: any;
}

export interface OrderData {
  id?: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  totalAmount: number;
  paymentStatus: string;
  orderStatus: string;
  items: any[];
  createdAt?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AdminDbService {
  constructor(private firebaseService: FirebaseService) {}

  // --- Products ---

  async getProducts(): Promise<ProductData[]> {
    const col = collection(this.firebaseService.firestore, 'products');
    try {
      const q = query(col, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ProductData));
    } catch (error) {
      console.warn('Ordered products query failed, falling back to unordered fetch:', error);
      const querySnapshot = await getDocs(col);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ProductData));
    }
  }

  async getProduct(id: string): Promise<ProductData | null> {
    const docRef = doc(this.firebaseService.firestore, 'products', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as ProductData;
    }
    return null;
  }

  async addProduct(product: Omit<ProductData, 'id' | 'createdAt'>): Promise<string> {
    const docRef = await addDoc(collection(this.firebaseService.firestore, 'products'), {
      ...product,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  }

  async updateProduct(id: string, product: Partial<ProductData>): Promise<void> {
    const docRef = doc(this.firebaseService.firestore, 'products', id);
    await updateDoc(docRef, product as DocumentData);
  }

  async deleteProduct(id: string): Promise<void> {
    const docRef = doc(this.firebaseService.firestore, 'products', id);
    await deleteDoc(docRef);
  }

  // --- Orders ---

  async getOrders(): Promise<OrderData[]> {
    const q = query(collection(this.firebaseService.firestore, 'orders'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as OrderData));
  }

  async updateOrderStatus(id: string, status: string): Promise<void> {
    const docRef = doc(this.firebaseService.firestore, 'orders', id);
    await updateDoc(docRef, { orderStatus: status });
  }
}
