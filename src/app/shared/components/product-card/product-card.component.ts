import { Component, Input, OnInit } from '@angular/core';
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
  altText = "Product image";

  constructor() { }

  ngOnInit(): void {
  }

}
