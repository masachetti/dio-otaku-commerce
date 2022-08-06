import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionFigureProduct } from 'src/app/models/action-figure';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ActionFigureProduct = {
    id: 0,
    productName: "Product Name",
    animeName: "",
    price: 0,
    quantity: 0,
    imageURL: ""
  }
  @Output() addToCart = new EventEmitter<ActionFigureProduct>;

  altText = "Product image";
  _outOfStock = false;

  constructor() { }

  ngOnInit(): void {
    this._outOfStock = this.product.quantity === 0;
  }

}
