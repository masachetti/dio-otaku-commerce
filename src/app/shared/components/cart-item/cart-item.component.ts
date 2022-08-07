import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionFigureProduct } from 'src/app/models/action-figure';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: ActionFigureProduct = {
    animeName: "HxH",
    id: 1,
    imageURL: "",
    price: 99.99,
    productName: "Product name",
    quantity: 10
  }
  @Input() quantity: number = 1;
  @Output() increase = new EventEmitter<Event>;
  @Output() decrease = new EventEmitter<Event>;
  @Output() remove = new EventEmitter<Event>;
  @Output() changeQuantity = new EventEmitter<number>;

  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalPrice = this.product.price * this.quantity;
  }

  changeQuantityHandler(event: any){
    let numberQuantity = parseInt(event.target.value);
    if (numberQuantity){
      this.changeQuantity.emit(numberQuantity);
    }
  }

}
