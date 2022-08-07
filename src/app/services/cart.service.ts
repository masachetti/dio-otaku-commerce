import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ActionFigureProduct } from '../models/action-figure';
import { CartItem } from '../models/cart-item';

const LOCAL_STORAGE_KEY = 'cartProducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: CartItem[] = [];
  subjectCartProducts = new Subject<CartItem[]>();
  observableCartProducts = this.subjectCartProducts.asObservable();
  _saveSubscription?: Subscription;

  constructor() {
    let savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCart) {
      this.cartProducts = JSON.parse(savedCart);
      this.propagateChanges();
    }
    this._saveSubscription = this.observableCartProducts.subscribe(
      (cartProducts) => this.saveCartProductsToLocalStorage()
    );
  }

  private saveCartProductsToLocalStorage() {
    let value = JSON.stringify(this.cartProducts);
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
  }

  private propagateChanges() {
    this.subjectCartProducts.next(this.cartProducts);
  }

  private getItem({ id }: ActionFigureProduct) {
    return this.cartProducts.find(({ productId }) => id === productId);
  }

  addProduct(product: ActionFigureProduct): void {
    let item = this.getItem(product);
    if (item !== undefined) return;
    this.cartProducts.push({
      productId: product.id,
      quantity: 1,
    });
    this.propagateChanges();
  }

  removeProduct(product: ActionFigureProduct) {
    let item = this.getItem(product);
    if (item === undefined) return;
    this.cartProducts.splice(this.cartProducts.indexOf(item), 1);
    this.propagateChanges();
  }

  decreaseProductQuantity(product: ActionFigureProduct) {
    let item = this.getItem(product);
    if (item === undefined) return;
    if (item.quantity <= 1) return;
    item.quantity -= 1;
    this.propagateChanges();
  }

  increaseProductQuantity(product: ActionFigureProduct) {
    let item = this.getItem(product);
    if (item === undefined) return;
    item.quantity += 1;
    this.propagateChanges();
  }

  setProductQuantity(product: ActionFigureProduct, quantity: number) {
    if (quantity <= 0) return;
    let item = this.getItem(product);
    if (item === undefined) return;
    item.quantity = quantity;
    this.propagateChanges();
  }

  getItems() {
    return this.cartProducts;
  }
}
