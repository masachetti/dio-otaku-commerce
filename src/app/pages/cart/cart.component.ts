import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionFigureProduct } from 'src/app/models/action-figure';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { StockApiService } from 'src/app/services/stock-api.service';

type CartProduct = CartItem & { product: ActionFigureProduct };
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  productCache: ActionFigureProduct[] = [];
  cartProducts: CartProduct[] = [];
  _carItemsSubcription?: Subscription;
  totalPrice: number = 0;

  constructor(
    private stockApiService: StockApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.populateCarProducts(this.cartService.getItems());

    this.cartService.observableCartProducts.subscribe((cartItems) =>
      this.populateCarProducts(cartItems)
    );
  }

  private populateCarProducts(cartItems: CartItem[]) {
    this.cartProducts = [];
    cartItems.forEach((cartItem) => {
      this.getProductById(
        cartItem.productId,
        (product: ActionFigureProduct) => {
          this.cartProducts.push({ ...cartItem, product: product });
        }
      );
    });
    this.totalPrice = this.cartProducts.reduce((ac, product) => {
      return ac + product.product.price * product.quantity;
    }, 0);
  }

  private getProductById(productId: number, callback: Function) {
    let cachedProduct = this.productCache.find((p) => p.id === productId);
    if (cachedProduct !== undefined) {
      callback(cachedProduct);
      return;
    }
    this.stockApiService.retrieveByProductId(productId).subscribe((product) => {
      if (product !== undefined) {
        this.productCache.push(product);
        callback(product);
      }
    });
  }

  increaseProduct(product: ActionFigureProduct) {
    this.cartService.increaseProductQuantity(product);
  }

  decreaseProduct(product: ActionFigureProduct) {
    this.cartService.decreaseProductQuantity(product);
  }

  removeProdcut(product: ActionFigureProduct) {
    this.cartService.removeProduct(product);
  }

  changeQuantity(product: ActionFigureProduct, quantity: number) {
    this.cartService.setProductQuantity(product, quantity);
  }

  ngOnDestroy(): void {
    this._carItemsSubcription?.unsubscribe();
  }
}
